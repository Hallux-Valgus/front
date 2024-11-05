<script lang="ts">
    import { onMount } from "svelte";
    import CenterTitle from "$components/title_component/CenterTitle.svelte";
    import Cell from "$components/cell_component/ResultCell.svelte";

    interface resultResponse {
        image_path: string;
        angle: number;
    }

    let image_url: string = "";
    let angle:number = -1.0
    onMount(() => {
        let image_path: string = localStorage.getItem("image_url")!;
        image_url = `http://localhost:8000${image_path}`;
        if(localStorage.getItem("angle_status") == "-1"){
            get_result(image_path);
        }
        console.log(localStorage.getItem("angle_status"));
        angle = Number(localStorage.getItem("angle"))
    });

    let email_input: string = "";
    let email_domain: string = "";
    let result: resultResponse = { image_path: "none", angle: -1.0 };

    async function get_result(image_path: string) {
        const response = await fetch(
            "http://localhost:8000/api/v1/get/result",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    image_file: image_path.split("/").pop(),
                }),
            },
        ).then(async (res) => {
            result = await res.json();
            angle = result.angle
            localStorage.setItem("angle_status", "1")
            localStorage.setItem("angle", `${result.angle}`)
        });
    }

    async function send_mail() {
        let user_mail = `${email_input}@${email_domain}`;
        const image_path = localStorage.getItem("image_url")!;
        const response = await fetch("http://localhost:8000/api/v1/send/mail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: user_mail,
                code: image_path.split("/").pop(),//localStorage.getItem("code"),
                angle: localStorage.getItem("angle")
            }),
            //localStorage.getItem("code")
        });

        const data = await response.json();
        if (response.ok) {
            if (data.msg == "success") {
                alert("메일 전송에 성공했습니다. 메일을 확인해주세요");
            } else {
                alert("메일 전송에 실패했습니다. 다시 확인해주세요");
            }
        } else {
            alert("메일 전송에 실패했습니다. 다시 시도해주세요");
        }
    }

    const to_home = function (): void {
        window.location.href = "/";
    };
</script>

<div class="result_container">
    <CenterTitle
        title={{
            head_title: "검사 결과를 사진으로 받아보세요",
            eng_title: "Photo Analysis Results",
        }}
    />
    <div id="email_container">
        <div id="email_input_container">
            <span id="email_input_head" class="form-select">Email</span>
            <input
                type="email"
                class="form-control"
                id="email_input"
                style="width:200px;"
                bind:value={email_input}
            />
            <span style="font-size:25px;">@</span>
            <select
                class="form-select"
                name="email_domian"
                id="email_domain"
                style="width: 200px"
                bind:value={email_domain}
            >
                <option value="naver.com">naver.com</option>
                <option value="google.com">google.com</option>
                <option value="hanmail.net">hanmail.net</option>
            </select>
        </div>
        <button
            class="btn btn-dark btn-lg"
            style="height:100%;"
            on:click={send_mail}>보내기</button
        >
    </div>

    <div id="result_image_container">
        <img src={image_url} alt="결과 사진" id="result_image" />
    </div>
    <p>각도: {angle}</p>
    <div id="result_act_column">
        <div class="result_act_row">
            <Cell
                content={{
                    icon: "/icons/hospital.png",
                    head_content: "병원 알아보기",
                    eng_content: "Hospital information",
                    main_content: "Recommedations for hospital",
                    hyper_link:
                        "https://map.naver.com/p/search/정형외과?c=13.32,0,0,2,dh",
                }}
            />
            <Cell
                content={{
                    icon: "/icons/medical.png",
                    head_content: "치료 도구",
                    eng_content: "Treatment Brace",
                    main_content: "Recommedations for treatment",
                    hyper_link:
                        "https://search.shopping.naver.com/search/all?query=무지외반증교정기",
                }}
            />
        </div>
        <div class="result_act_row">
            <Cell
                content={{
                    icon: "/icons/exercise.png",
                    head_content: "예방 운동법",
                    eng_content: "Preventive Exercise",
                    main_content: "Follow the precautionary exercise",
                    hyper_link:
                        "https://www.youtube.com/results?search_query=무지외반증+운동",
                }}
            />
            <Cell
                content={{
                    icon: "/icons/information.png",
                    head_content: "질병 알아보기",
                    eng_content: "Information of Hallux Valgus",
                    main_content: "You can view the results here in detail",
                    hyper_link: "/prevents",
                }}
            />
        </div>
    </div>
    <div id="home_button_container">
        <button class="hfoot_button" on:click={to_home}
            >Home으로 돌아가기</button
        >
    </div>
</div>

<style>
    .result_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: auto;

        margin: 10vh 0vw;
        gap: 3vh;
    }
    #result_act_column {
        display: flex;
        flex-direction: column;
        gap: 2vh;
        width: 900px;
        height: auto;
    }
    #home_button_container {
        width: 900px;
    }
    #home_button_container button {
        width: 900px;
        height: 40px;
    }
    .result_act_row {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 2vh;
    }

    #result_image {
        width: 45vw;
        height: auto;
    }
    #email_container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 3vw;

        padding: 1vh 5vw;
    }
    #email_input_container {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 3px 3px;

        gap: 1vw;

        border: solid 1px #000;
        border-radius: 5px;
    }
    #email_input_head {
        display: inline-block;
        background-color: #000;
        color: white;
        text-align: center;
        width: 150px;
        border: solid 3px #000;
    }

    #email_input,
    #email_domain {
        outline: solid 2px rgb(210, 210, 210);
    }

    #email_input:focus,
    #email_domain {
        outline: solid 2px rgb(210, 210, 210);
        box-shadow: none;
    }
</style>

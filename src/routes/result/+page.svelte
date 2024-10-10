<script lang="ts">
    import { onMount } from "svelte";
    import CenterTitle from "$components/title_component/CenterTitle.svelte";
    import Cell from "$components/cell_component/ResultCell.svelte";
    let image_url:string = "";
    onMount(() => {
        let image_path: string = localStorage.getItem("image_url")!; 
        image_url = `http://localhost:8000${image_path}`;
        console.log(image_url)
    });

    const to_home = function (): void {
        window.location.href = "/";
    };
</script>

<div class="page_container">
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
                style="width:175px;"
            />
            <span style="font-size:25px;">@</span>
            <select
                class="form-select"
                name="email_domian"
                id="email_domain"
                style="width: 200px"
            >
                <option value="naver.com">naver.com</option>
                <option value="google.com">google.com</option>
                <option value="hanmail.net">hanmail.net</option>
            </select>
        </div>
        <button class="hfoot_button" style="height:100%;">보내기</button>
    </div>

    <div id="result_image_container">
        <img src={image_url} alt="결과 사진" id="result_image" />
    </div>
    <div id="result_act_column">
        <div class="result_act_row">
            <Cell
                content={{
                    icon: image_url,
                    head_content: "병원 알아보기",
                    eng_content: "Hospital information",
                    main_content: "Get Recommedations for hospital information",
                }}
            />
            <Cell
                content={{
                    icon: image_url,
                    head_content: "병원 알아보기",
                    eng_content: "Hospital information",
                    main_content: "Get Recommedations for hospital information",
                }}
            />
        </div>
        <div class="result_act_row">
            <Cell
                content={{
                    icon: image_url,
                    head_content: "병원 알아보기",
                    eng_content: "Hospital information",
                    main_content: "Get Recommedations for hospital information",
                }}
            />
            <Cell
                content={{
                    icon: image_url,
                    head_content: "병원 알아보기",
                    eng_content: "Hospital information",
                    main_content: "Get Recommedations for hospital information",
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
    .page_container {
        margin: 20vh 0vw;
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
        gap: 5vw;

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

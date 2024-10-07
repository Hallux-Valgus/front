<script lang="ts">
    import {onMount} from "svelte";
    import CenterTitle from "$components/title_component/CenterTitle.svelte";
    import {fetchUUID} from "./GetUserId";
    let uuid_code: string = "";
    let gender: string = "남성";
    let age: number = 30;

    async function getUUID(){
        try{
            uuid_code = await fetchUUID();
        }catch(error){
            console.error("Fail to Load UUID");
        }
    }

    onMount(() => {getUUID();});

    function copyToClipboard(): void {
        navigator.clipboard
            .writeText(annoymous_code)
            .then(() => {
                console.log("복사 성공", annoymous_code);
                alert("코드가 복사됐습니다");
            })
            .catch((err: any) => {
                console.error("복사 실패");
            });
    }

    const to_back = () => {
        window.location.href = "/start";
    };

    const to_next = () => {
        window.location.href = "/guide";
    };
</script>

<div class="page_container">
    <CenterTitle
        title={{
            head_title: "정보 확인",
            eng_title: "Check Your Code and informations",
        }}
    />

    <div id="code_container">
        <div style="display:flex; flex-direction:row; align-itmes: flex-start;">
            <span id="code">Code : {uuid_code}</span>
            <button id="copy_button" on:click={copyToClipboard}>복사</button>
        </div>
        <p id="eng_explain">An adiabatic anastomosis Test User</p>
        <p id="information">성별: {gender} / 나이: {age}대</p>
    </div>

    <div class="button_container">
        <button id="back_button" class="hfoot_button page_button" on:click={to_back}>뒤로가기</button>
        <button id="next_button" class="hfoot_button page_button" on:click={to_next}>Next</button>
    </div>
</div>

<style>
    #copy_button {
        border: solid 1px white;
        background: white;
        border-radius: 10px;
        margin: 0vh 1vw;
    }
    .button_container {
        display: flex;
        flex-direction: column;
        gap: 3vh;
    }
    #code_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 3vh 0vw;
        width: 100vw;
        background: gray;
        padding: 2vh;
    }
    #code_container p {
        margin: 1vh 0vw;
        text-align: left;
    }
    #code {
        font-size: xx-large;
        font-weight: bold;
        color: white;
    }
    #eng_explain {
        background: rgb(211, 211, 211);
        padding: 0vh 1vw;
    }
    #information {
        font-size: large;
        color: white;
    }
</style>

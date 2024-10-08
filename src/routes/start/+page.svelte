<script lang="ts">
    import "./start_page.css";
    import CenterTitle from "$components/title_component/CenterTitle.svelte";
    import Information from "./Information.svelte";
    import { CreateUser } from "./CreateUser";

    let age: string = "";
    let gender: string = "";

    const to_next = () => {
        CreateUser(gender, parseInt(age)).then((code: string) =>
            localStorage.setItem("code", code),
        );
        window.location.href="/code";
    };
</script>

<div class="page_container">
    <CenterTitle
        title={{
            head_title: "본인의 정보를 넣어주세요",
            eng_title: "Add your details to receive accurate results",
        }}
    />
    <div><Information bind:gender bind:age /></div>
    <div id="next_button_container">
        <button
            id="next_button"
            class="hfoot_button page_button"
            on:click={to_next}>Next</button
        >
    </div>
</div>

<style>
    .page_container {
        gap: 5vh;
    }

    #next_button_container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 30vw;
    }
</style>

<script lang="ts">
    import "./start_page.css";
    import CenterTitle from "$components/title_component/CenterTitle.svelte";
    import Information from "./Information.svelte";

    const to_next = () => {
        window.location.href = "/code";
    };
</script>

<div class="page_container">
    <CenterTitle
        title={{
            head_title: "본인의 정보를 넣어주세요",
            eng_title: "Add your details to receive accurate results",
        }}
    />
    <div><Information /></div>
    <div id="next_button_container">
        <button id="next_button" class="hfoot_button page_button" on:click={to_next}
            >Next</button>
    </div>
</div>

<style>
    .page_container {
        gap: 5vh;
    }
</style>

<script lang="ts">
    import "./start_page.css";
    import CenterTitle from "$components/title_component/CenterTitle.svelte";
    import Information from "./Information.svelte";
</script>

<div class="page_container">
    <CenterTitle
        title={{
            head_title: "본인의 정보를 넣어주세요",
            eng_title: "Add your details to receive accurate results",
        }}
    />
    <Information />
</div>

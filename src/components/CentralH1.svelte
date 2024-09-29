<script lang="ts">
    export let head_title: string = "";
</script>

<style>
    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh; /* 화면 전체를 채우고 중앙에 정렬 */
        margin: 0;
    }
</style>

<h1>{head_title}</h1>
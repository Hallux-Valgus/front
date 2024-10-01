<script lang="ts">
    import "./center_div.css";
    export let title: {head_title:string, eng_title:string};    
</script>

<style>
    
</style>

<div class="center">
    <h1 class="title">{@html title.head_title}</h1>
    <p class="title">{title.eng_title}</p>
</div>
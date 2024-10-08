<script>
    export let gender = '';
    export let age = '';
</script>

<div class="information_select">
    <p class="information_title">성별</p>
    <select name="gender" id="start_gender" class="form-select" bind:value={gender}>
        <option value="남성">남성</option>
        <option value="여성">여성</option>
    </select>
</div>
<div class="information_select">
    <p class="information_title">나이(대)</p>
    <select name="gender" id="start_gender" class="form-select" bind:value={age}>
        <option value="10">10대</option>
        <option value="20">20대</option>
        <option value="30">30대</option>
        <option value="40">40대</option>
        <option value="50">50대</option>
        <option value="60">60대 이상</option>
    </select>
</div>

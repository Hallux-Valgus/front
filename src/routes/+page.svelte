<script lang="ts">
    import "./main_page.css";
    const start_event = () => {
        window.location.href="/start"
    }
</script>

<div class="page_container">
    <h1 id="main_head_title">
        환영합니다<br />무지외반 검사 플랫폼 "HFOOT"입니다
    </h1>
    <span id="main_eng_title">Welcome. This is "HFOOT," an adiabatic anastomosis testing platform.</span>
    <div id="main_button_container">
        <button class="hfoot_button" id="main_button_start" on:click={start_event}>시작하기</button>
        <button class="hfoot_button" id="main_button_explain">질병 알아보기</button>
        <button class="hfoot_button" id="main_button_search">코드 번호 검색하기</button>
    </div>
</div>

<script>
    import CenterTitle from "$components/title_component/CenterTitle.svelte";
</script>

<div class="page_container">
    <CenterTitle
        title={{
            head_title: "사진 제출 가이드",
            eng_title: "Read a clear picture for accurate analysis guide",
        }}
    />
    <div id="sequence_container">
        <p style="width:100%; text-align:center; font-size:20px;">
            사진 촬영 가이드
        </p>
        <div>
            <p class="guide_paragraph">
                첫번째, 사진 촬영 전 배경 문의 없는 곳에서 해주세요
            </p>
            <p class="guide_paragraph">
                두번째, 맨발로 발바닥을 바닥에 붙여주세요
            </p>
            <p class="guide_paragraph">세번째, 발목에서 시작해서 찍어주세요</p>
        </div>
    </div>
    <div id="button_container">
        <button class="hfoot_button page_button">넘어가기</button>
    </div>
</div>

<style>
    .page_container {
        align-items: center;
        gap: 5vh;
    }

    #sequence_container {
        display: flex;
        flex-direction: column;
    }

    .guide_paragraph {
        border: 1px solid rgb(210, 210, 210);
        border-radius: 5px;
        padding: 0.5vh 1vw;
        color: rgb(100, 100, 100);
    }
</style>

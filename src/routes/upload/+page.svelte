<script>
      import {onMount} from "svelte";
      import CenterTitle from "$components/title_component/CenterTitle.svelte";
      import {upload_image} from "./UploadImage";

      onMount(() => {
            console.log(upload_image());
      });
      const to_next = () => {
            window.location.href = "/code";
      };
</script>

<div class="page_container">
      <CenterTitle
            title={{
                  head_title: "사진 제출로 결과를 받아보세요",
                  eng_title: "Add a clear picture for accurate analysis",
            }}
      />
      <div id="upload_container">
            <label for="formFile">Upload Photo</label>
            <input type="file" class="form-control" />
      </div>

      <div id="button_container">
            <button class="hfoot_button page_button">Next</button>
      </div>
</div>

<style>
      .page_container {
            gap: 5vh;
      }

      #upload_container {
            width: 30vw;
      }
</style>

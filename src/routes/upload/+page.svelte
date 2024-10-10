<script lang="ts">
      import { onMount } from "svelte";
      import CenterTitle from "$components/title_component/CenterTitle.svelte";
      import { upload_image } from "./UploadImage";

      let selectedFile: File | null = null;

      onMount(() => {
            console.log(upload_image());
      });

      function handleFileChange(event: Event) {
            const target = event.target as HTMLInputElement;
            if (target.files && target.files.length > 0)
                  selectedFile = target.files[0];
      }

      async function to_next(){
            if (!selectedFile) {
                  alert("파일을 선택해주세요");
                  return;
            }

            const formData = new FormData();
            formData.append("image", selectedFile);
            formData.append("code", localStorage.getItem("code")!);

            try{
                  const response = await fetch("http://localhost:8000/api/v1/upload", {
                        method:"POST",
                        body: formData
                  });

                  if(response.ok){
                        alert("파일 전송이 성공했습니다");
                        window.location.href = "/result";
                  }else{
                        alert("파일 전송에 실패했습니다");
                  }
            }catch(error){
                  console.error(error)
            }
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
            <input
                  type="file"
                  class="form-control"
                  on:change={handleFileChange}
            />
      </div>

      <div id="button_container">
            <button class="hfoot_button page_button" on:click={to_next}
                  >Next</button
            >
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

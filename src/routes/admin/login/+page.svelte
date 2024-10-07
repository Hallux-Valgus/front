<script lang="ts">
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import CenterTitle from "$components/title_component/CenterTitle.svelte";

    let username: string = "";
    let password: string = "";
    let errorMessage: string = "";

    async function submitLogin() {
        try {
            const response = await fetch("http://localhost:8080/api/v1/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("success ", data);
                errorMessage = "";
            } else {
                console.log("Failed ", data);
                errorMessage = "Invalid username or password";
            }
        } catch (error) {
            console.error("Error: ", error);
            errorMessage = "An Error Occured";
        }
    }
</script>

<div class="page_container">
    <CenterTitle
        title={{
            head_title: "관리자 인증",
            eng_title: "Administrator Authentication",
        }}
    />
    <div id="login_container">
        <div id="login_input_container">
            <input
                class="form-control"
                type="text"
                placeholder="ID"
                bind:value={username}
            />
            <input
                class="form-control"
                type="password"
                placeholder="PW"
                bind:value={password}
            />
        </div>
        <button
            id="submit_button"
            class="hfoot_button page_button"
            on:click={submitLogin}>인증</button
        >
    </div>
    <span style="color:red;">{errorMessage}</span>
</div>

<style>
    .page_container {
        gap: 6vh;
    }
    #login_container {
        display: flex;
        flex-direction: row;
        gap: 3vw;
    }
    #login_input_container {
        display: flex;
        flex-direction: column;
        gap: 2vh;
    }
    #submit_button {
        height: 100%;
    }
</style>

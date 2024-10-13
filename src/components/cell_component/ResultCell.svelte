<script lang="ts">
    export let content: {
        icon: string;
        head_content: string;
        eng_content: string;
        main_content: string;
        hyper_link:string;
    };
</script>

<div class="result_act_cell">
    <div class="inner_cell">
        <img src={content.icon} alt={content.icon} id="cell_icon" />
        <div class="content_container">
            <h3><a href="{content.hyper_link}" style="text-decoration:none; color:black">{content.head_content}</a></h3>
            <p>{content.eng_content}</p>
            <p style="width:300px;">{@html content.main_content}</p>
        </div>
    </div>
</div>

<style>
    #cell_icon {
        width: 50px;
        height: 50px;
    }
    .result_act_cell {
        display:flex;
        flex-direction: column;

        width: 50vw;
        height: 150px;

        justify-content: center;
        align-items: center;

        border: solid 1px rgb(210,210,210);
        border-radius: 5px;

        /* background: wheat; */
    }
    .inner_cell{
        display: flex;
        flex-direction: row;

        gap: 25px;

        justify-content: center;
        align-items: flex-start;
    }
    .content_container {
        display: flex;
        flex-direction: column;
    }
</style>

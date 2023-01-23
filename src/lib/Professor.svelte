<script>
    import Uploads from "./Uploads.svelte";
    import VoltarHome from "./VoltarHome.svelte";
    import { trocarEstado } from "../stores";
    import { paginaAtual } from "../stores";
    
    
    /*
    function iniciarArquivos() {
        // @ts-ignore
        button.style.visibility = "hidden";
        // @ts-ignore
        arquivos.style.visibility = "visible";
    }
*/

    let files;

    $: if (files) {
        console.log(files);

        for (const file of files) {
            console.log(`${file.name}: ${file.size} bytes`);
        }
    }
</script>

<main>
    

    <h1>Ola, Professor!</h1>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div>

        <h2> Coloque aqui atividades para seu aluno </h2>
        
            <input bind:files id="many" multiple type="file" />
            

            {#if files}
                <h2>Arquivos selecionados:</h2>
                {#each Array.from(files) as file}
                    <p>{file.name} ({file.size} bytes)</p>
                {/each}
            {/if}
      <!--     
        <div id="arquivos">

        </div>
    -->
    </div>

    <div>
        <a href="https://www.youtube.com/playlist?list=OLAK5uy_mvhKiTFfkl2DwEtiwoGNQka9MdhBn6YiA"
         target="_blank" 
         rel="noopener noreferrer"> <button>criar playlist</button> </a>
    </div>   
    


        <!-- svelte-ignore a11y-click-events-have-key-events -->
     <!--    <div id="button" on:click={() => iniciarArquivos()}> -->
            
            
    <div>
        <div on:click={() => trocarEstado("uploads")}> ajuda</div>
        <div>
        {#if $paginaAtual == "uploads"}
         <Uploads />
         {/if}
        </div>
    </div>



        <button>
            <VoltarHome />
        </button>

    
</main>

<!--
<style>
        #arquivos {
        visibility: hidden;
    }

    #button {
        visibility: visible;
    }
</style>
-->
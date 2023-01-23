<script>
// @ts-nocheck

  import Home from "./lib/Home.svelte";
  import Register from "./lib/Register.svelte";
  import Login from "./lib/Login.svelte";
  import Sobre from "./lib/Sobre.svelte";
  import Aluno from "./lib/Aluno.svelte";
  import { paginaAtual, usuarioAtual } from "./stores";
  import Professor from "./lib/Professor.svelte";

  import { trocarEstado } from "./stores";

  
  /*
  function mudarPagina(pagina) {
    $paginaAtual = pagina;
  }
*/

</script>

<main>
  
<!--
  <h1>HALALU</h1>
  <nav>
    <div on:click={() => mudarPagina("home")}>Home</div>

    <div on:click={() => mudarPagina("sobre")}>Sobre</div>

    <div on:click={() => mudarPagina("aluno")}>Aluno</div>

    <div on:click={() => mudarPagina("professor")}>Professor</div>


    {#if !$usuarioAtual}
      <div on:click={() => mudarPagina("register")}>Cadastrar</div>
      <div on:click={() => mudarPagina("login")}>Login</div>
    {:else}
      <div on:click={() => ($usuarioAtual = null)}>Logout</div>
    {/if}

   
  </nav>
-->

  <div>
    {#if $paginaAtual == "home"}
      <Home />
    {:else if $paginaAtual == "register"}
      <Register />
    {:else if $paginaAtual == "login"}
      <Login />
    {:else if $paginaAtual == "sobre"}
      <Sobre />
    {:else if $paginaAtual == "aluno"}
      <Aluno />
    {:else if $paginaAtual == "professor"}
    <Professor />
     
    {/if}
  </div>
</main>



<style>
  nav {
    display: flex;
    gap: 0.5em;
    justify-content: space-between;
  }
  nav > div {
    border: 1px solid black;
    padding: 0 1em;
    cursor: pointer;
  }
</style>

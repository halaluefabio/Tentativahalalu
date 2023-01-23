<script>
import { trocarEstado } from "../stores";
import { usuarioAtual } from "../stores";


</script>

<div class="inicio">

    <h1>HALALU</h1>
    <h3> Vencer é nunca desistir... </h3>
    
    </div>


  <nav>
    <div on:click={() => trocarEstado("home")}>Home</div>

    <div on:click={() => trocarEstado("sobre")}>Sobre</div>

    <div on:click={() => trocarEstado("aluno")}>Aluno</div>

    <div on:click={() => trocarEstado("professor")}>Professor</div>


    {#if !$usuarioAtual}
      <div on:click={() => trocarEstado("register")}>Cadastrar</div>
      <div on:click={() => trocarEstado("login")}>Login</div>
    {:else}
      <div on:click={() => ($usuarioAtual = null)}>Logout</div>
    {/if}
  </nav>
  


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
    
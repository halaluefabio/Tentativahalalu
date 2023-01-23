<script>
    import { usuarios } from "../stores";
    import VoltarHome from "./VoltarHome.svelte";

    const form = {
        username: "",
        pw: "",
    };

    const addUser = () => {
        $usuarios = $usuarios.concat({
            username: form.username,
            pw: form.pw,
        });

        form.username = "";
        form.pw = "";

        alert("usuario cadastrado");
    };
</script>

<form on:submit|preventDefault={addUser}>
    <fieldset>
        <legend>Cadastro</legend>
        <input
            type="text"
            name="username"
            bind:value={form.username}
            placeholder="username"
            required
        />
        <input
            type="password"
            name="pw"
            bind:value={form.pw}
            placeholder="password"
            required
        />

        <!--
            <input type=checkbox  bind:checked={professor}>
            sou professor
            <input type=checkbox bind:checked={aluno}>
            sou aluno
        -->
    <div>
        <form>
            <input type="radio" name="opcao" value="opt1"> sou professor
            <input type="radio" name="opcao" value="opt2"> sou aluno
        </form>
    </div> 

        <button>
            Cadastrar
        </button>


    </fieldset>
</form>

<button>
    <VoltarHome/>
    </button>



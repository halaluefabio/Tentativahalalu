
<script>

    import { paginaAtual, login } from "../stores";
    import VoltarHome from "./VoltarHome.svelte";
    
    const form = {
        username: "",
        pw: "",
    }
    
    const handleForm = async () =>{
        await login(form.username, form.pw);
        if ($paginaAtual){
            $paginaAtual = 'home';
        }
    };
    
    </script>
    
    <form on:submit|preventDefault={handleForm} >
        <fieldset>
            <legend>Login</legend>
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
            placeholder="pw"
            required 
            />
            
            <button>Entrar</button>
        </fieldset>
    </form>


<button>
<VoltarHome/>
</button>



    
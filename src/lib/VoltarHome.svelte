<script>
import { trocarEstado } from "../stores";

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class='home' on:click={() => trocarEstado('home')}>
	Voltar 
</div>
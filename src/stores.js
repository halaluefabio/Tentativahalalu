import { writable } from "svelte/store";

export let paginaAtual = writable ('home') ;
export const usuarios = writable ([]);
export const usuarioAtual = writable (null);

export function trocarEstado(novaPagina) {
	paginaAtual.set(novaPagina)
}

usuarios.subscribe (v => {
    const usuario = v.at(-1);

    if (!usuario) return;

    const formData = new FormData();
    formData.append('username', usuario.username);
    formData.append('password', usuario.pw);

    fetch('http://localhost:8000/add-user.php', {
        method: 'post',
        body: formData
    }); // non blocking
    console.log('oi');
} )

export const login = async (username, pw) => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', pw);
    const response = await fetch('http://localhost:8000/login.php', {
        method: 'post',
        body: formData
    });
    if (!response.ok) {
        alert('usuário ou senha incorretos');
        return;
    }
    const data = await response.json();
    usuarioAtual.set(data);
    
}
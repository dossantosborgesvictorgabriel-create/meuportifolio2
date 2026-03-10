function enviarWhats(event) {
    event.preventDefault();

const nome = document.getElementById('nome');
const mensagem = document.getElementById('mensagem');
const telefone = '5564981343597';

const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
const msgFormatada = encodeURIComponent(texto);

const url = `https://wa.me/${telefone}/?t=${msgFormatada}`;

window.open(url, '_blank');

}
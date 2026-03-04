// Vamos fazer um jogo da forca pelo terminal, ok?


const readline = require('readline-sync');

// Palavras que vamos usar no jogo da forca, podem musdar se quiser
const palavras = ["javascript", "terminal", "computador", "programacao", "github"];

let tentativas = 6
let LetrasPodeUsar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "t"];

//Aqui vai escolher uma das palavras aleatoriamente
const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];

// para guardar o tamanho da palavra
let tamanhoPalavra = [];

// função para mostrar a palavra escolhida ocultada
function mostrarPalavraOculta() {
for (let i = 0; i < palavraAleatoria.length; i++) {
    tamanhoPalavra.push('_');
    }
    // o join serve para mudar o separador entre os elementos, nesse caso ele é um espaço vazio
    let palavraOculta = tamanhoPalavra.join(" ");
    console.log(palavraOculta)
}

// teste
mostrarPalavraOculta();
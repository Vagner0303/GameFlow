// Vamos fazer um jogo da forca pelo terminal, ok?


const readline = require('readline-sync');

// Palavras que vamos usar no jogo da forca, podem musdar se quiser
const palavras = ["javascript", "terminal", "computador", "programacao", "github"];

let tentativas = 6
let LetrasPodeUsar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "t"];

//Aqui vai escolher uma das palavras aleatoriamente
const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];




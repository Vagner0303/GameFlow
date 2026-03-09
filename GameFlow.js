// vamos fazer um jogo da forca pelo terminal, ok?

const readline = require('readline-sync');

// palavras que vamos usar no jogo da forca
const palavras = ["javascript", "terminal", "computador", "programacao", "github"];

let LetrasDescobertas = [];
let tentativas = 6
let LetrasUsada = [];
let LetrasPodeUsar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// escolher palavra aleatória
const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];

// guardar tamanho da palavra
let tamanhoPalavra = [];

// mostrar palavra oculta
function mostrarPalavraOculta() {

    for (let i = 0; i < palavraAleatoria.length; i++) {
        tamanhoPalavra.push('_');
    }

    let palavraOculta = tamanhoPalavra.join(" ");
    return palavraOculta;
}

// função perder vida
function PerderVida(){

    tentativas--;

    if (tentativas > 0) {
        console.log("Você errou! Restam " + tentativas + " tentativas.");
    } else {
        console.log("Você perdeu! Fim de jogo.");
    }

}

//função para revelar letra na palavra
function revelarLetra(letra){

    for (let i = 0; i < palavraAleatoria.length; i++){

        if (palavraAleatoria[i] === letra){
            tamanhoPalavra[i] = letra;
        }

    }

    console.log(tamanhoPalavra.join(" "));
}

// texto inicial
console.log("🎮 Olá, você está em um Jogo da Forca, digita a palavra certa ou morra!!!")
console.log(" ")
console.log("❌ Você tem 6 tentativas, a cada letra errada você perde uma vida!!! ☠️")
console.log("____________________________ / / ______________________________________")
console.log(" ")

console.log("Jogo iniciado, descubra a palavra ou morra!!! ☠️")
console.log("")
console.log(mostrarPalavraOculta())
console.log("")


console.log("____________________________ / / ______________________________________")
console.log("")

function pedirLetra() {

    let letra = readline.question("Digite uma letra: ");
    let letraFormatada = letra.trim().toLowerCase();
    let podeUsar = false;

    while (!podeUsar || letraFormatada === "") {

        podeUsar = LetrasPodeUsar.includes(letraFormatada);

        if (!podeUsar || letraFormatada === "") {
            letra = readline.question("Digite uma letra válida: ");
            letraFormatada = letra.trim().toLowerCase();
        }
    }

    // impedir repetir letras
    while (LetrasUsada.includes(letraFormatada)) {
        letra = readline.question("Essa letra já foi usada, digite outra: ");
        letraFormatada = letra.trim().toLowerCase();
    }

    LetrasUsada.push(letraFormatada);

    return letraFormatada;
}


let letra = pedirLetra();

if (!palavraAleatoria.includes(letra)) {

    PerderVida();

} else {

    console.log("Boa! A letra existe na palavra.");

    revelarLetra(letra);

} 
 

 

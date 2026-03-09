// vamos fazer um jogo da forca pelo terminal, ok?

const readline = require('readline-sync');

// palavras que vamos usar no jogo da forca
const palavras = ["javascript", "terminal", "computador", "programacao", "github"];

let LetrasDescobertas = [];
let tentativas = 6;
let LetrasUsada = [];
let LetrasPodeUsar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// escolher palavra aleatória
const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];

// guardar tamanho da palavra
let tamanhoPalavra = [];

// mostrar palavra oculta
function mostrarPalavraOculta() {
    for (let i = 0; i < palavraAleatoria.length; i++) {
        tamanhoPalavra.push("_"); // corrigido aqui
    }
    let palavraOculta = tamanhoPalavra.join(" ");
    return palavraOculta;
}

// função perder vida
function PerderVida(){
    tentativas--;
    if (tentativas > 0) {
        console.log("Você errou! Restam " + tentativas + " tentativas.");
        console.log("=============================================");
    } else {
        console.log("Você perdeu! Fim de jogo ☠️");
        console.log("A palavra era: " + palavraAleatoria);
        process.exit();
    }
}

// função ganhar jogo
function GanharJogo() {
    if (!tamanhoPalavra.includes("_")) {
        console.log("🎉 Parabéns! Você ganhou, a palavra era: " + palavraAleatoria + " 🎉");
        process.exit();
    }
}

// função para revelar letra na palavra
function revelarLetra(letra){
    for (let i = 0; i < palavraAleatoria.length; i++){
        if (palavraAleatoria[i] === letra){
            tamanhoPalavra[i] = letra;
        }
    }

    console.log("Palavra: " + tamanhoPalavra.join(" "));
    console.log("Letras usadas: " + LetrasUsada.join(", "));
    console.log("=============================================");
}

// texto inicial
console.log("🎮 Olá, você está em um Jogo da Forca, digita a palavra certa ou morra!!! ");
console.log(" ");
console.log("❌ Você tem 6 tentativas, a cada letra errada você perde uma vida!!! ☠️");
console.log(" ");
console.log("Jogo iniciado, descubra a palavra ou morra!!! ☠️");
console.log(mostrarPalavraOculta());
console.log("======================================================");

function pedirLetra() {
    let letra = readline.question("Digite uma letra: ");
    console.log("======================================================");
    let letraFormatada = letra.trim().toLowerCase();
    let podeUsar = false;

    while (!podeUsar || letraFormatada === "") {
        podeUsar = LetrasPodeUsar.includes(letraFormatada);
        if (!podeUsar || letraFormatada === "") {
            letra = readline.question("Digite uma letra valida: ");
            console.log("======================================================");
            letraFormatada = letra.trim().toLowerCase();
        }
    }

    // impedir repetir letras
    while (LetrasUsada.includes(letraFormatada)) {
        letra = readline.question("Essa letra ja foi usada, digite outra: ");
        console.log("======================================================");
        letraFormatada = letra.trim().toLowerCase();
    }

    LetrasUsada.push(letraFormatada);

    console.log("Letras usadas: " + LetrasUsada.join(", "));
    console.log("=============================================");

    return letraFormatada;
}

// jogo
while (tentativas > 0 && tamanhoPalavra.includes("_")) {
    let letra = pedirLetra();

    if (!palavraAleatoria.includes(letra)) {
        PerderVida();
    } else {
        console.log("Boa! A letra existe na palavra.");
        console.log("======================================================");
        revelarLetra(letra);
        GanharJogo();
    }
}
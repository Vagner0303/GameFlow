// vamos fazer um jogo da forca pelo terminal, ok?

const readline = require('readline-sync');

// palavras que vamos usar no jogo da forca, podem musdar se quiser
const palavras = ["javascript", "terminal", "computador", "programacao", "github"];

let LetrasDescobertas = [];
let tentativas = 6
let LetrasUsada = [];
let LetrasPodeUsar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//aqui vai escolher uma das palavras aleatoriamente
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
    return palavraOculta;
}

//função de perder vida
function PerderVida(){

tentativas--;

    if (tentativas > 0) {
        console.log("Você errou! Restam " + tentativas + " tentativas.");
    } else {
        console.log("Você perdeu! Fim de jogo.");
    }
}


// Texto inicial do jogo
console.log("Olá, você está em um Jogo da Forca, digita a palavra certa ou morra! 🪢")
console.log(" ")
console.log("❌ Você tem 6, a cada de letra errada você perde uma vida! ☠️")
console.log("____________________________ / / ______________________________________")
console.log(" ")

// iniciando jogo
console.log("Jogo iniciado, descubra a palavra ou morra!!! ☠️")
console.log(mostrarPalavraOculta())

console.log("======================================================")

function pedirLetra() {
    let letra = readline.question("Digite uma letra: ");
    // formatar para comparar com a array já existente
    let letraFormatada = letra.trim().toLowerCase();
    // iniciar uma variável
    let podeUsar = false;

    // validar se é letra e se não é um espaço vazio, repete até dar certo
    while (!podeUsar || letraFormatada === "") {

        podeUsar = LetrasPodeUsar.includes(letraFormatada); // retorna true ou false

        // verifica se um deles é verdadeiro para pedir de novo
        if (!podeUsar || letraFormatada === "") {
            letra = readline.question("Digite uma letra válida: ");
            letraFormatada = letra.trim().toLowerCase();
        }
    }
    // letra foi usada
    LetrasUsada.push(letraFormatada);
    // para usar depois
    return letraFormatada;
}

// verificar se a letra existe na palavra
let letra = pedirLetra();

if (!palavraAleatoria.includes(letra)) {

    PerderVida();

} else {

    console.log("Boa! A letra existe na palavra.");

}




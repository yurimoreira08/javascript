// 11. Use funções para implementar um jogo de adivinhação onde o computador gera um número aleatório entre 1 e 100 e o usuário tem que adivinhar qual é em até 10 tentativas. Verifique se cada palpite do usuário está correto, menor ou maior que o número secreto. Exiba mensagens informando o resultado de cada tentativa e forneça pistas (menor/maior) para auxiliar o usuário. 

let numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;
let acertou = false;

function funcaoNumeroSecreto() {
while (tentativas < 10 && !acertou) {
    let palpite = Number(prompt(`Tentativa ${tentativas + 1}. Digite um número entre 1 e 100: `));

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        console.log("Por favor, digite um número válido entre 1 e 100.");
        continue;
    }

    tentativas++;

    if (palpite === numeroSecreto) {
        console.log(`🎉 Parabéns! Você acertou o número secreto (${numeroSecreto}) em ${tentativas} tentativas.`);
        acertou = true;
    } else if (palpite < numeroSecreto) {
        console.log("Errou! O número secreto é maior.");
    } else {
        console.log("Errou! O número secreto é menor.");
    }
}

if (!acertou) {
    console.log(`❌ Suas 10 tentativas acabaram! O número secreto era ${numeroSecreto}.`);
}
}

funcaoNumeroSecreto();
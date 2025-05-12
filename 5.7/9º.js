// 9. Escreva um programa que peça ao usuário sua altura e peso, calcule o IMC (Índice de Massa Corporal) e classifique conforme a tabela da OMS (abaixo do peso, peso normal, sobrepeso, obesidade). Exiba o valor do IMC e a classificação usando a instrução switch.

let altura = Number(prompt('Digite sua altura: '));
let peso = Number(prompt('Digite seu peso: '));

if (isNaN(peso) || isNaN(altura)) {
    console.log('Insira apenas valores válidos');
}

let imc = peso / (altura * altura);
console.log(`Seu IMC é ${imc}`);

let classificacao;

switch (true) {
    case (imc < 18.5):
        classificacao = 'Baixo peso';
        break;
    case (imc > 18.5 && imc < 24.9):
        classificacao = 'Peso normal';
    break;
    case (imc > 25 && imc < 29.9):
        classificacao = 'Sobrepeso';
    break;
    case (imc > 30 && imc < 34.9):
        classificacao = 'Obesidade grau I';
    break;
    case (imc > 35 && imc < 39.9):
        classificacao = 'Obesidade grau II';
    break;
    case (imc >= 40):
        classificacao = 'Obesidade grau III';
    break;
}

console.log(`A classificação do seu IMC é ${classificacao}`);
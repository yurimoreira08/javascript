// 14. Usando funções, escreva um programa que solicita ao usuário sua altura e peso e calcula o IMC. Em seguida, exibe o resultado e uma mensagem indicando se a pessoa está abaixo do peso, no peso normal, com sobrepeso ou obesa.

let altura = Number(prompt("Digite sua altura: "));
let peso = Number(prompt("Digite seu peso: "));

if (isNaN(peso) || isNaN(altura)) {
  console.log("Insira apenas valores válidos");
}

function calcularIMC() {
  let imc = peso / (altura * altura);
  console.log(`Seu IMC é ${imc}`);

  let classificacao;

  switch (true) {
    case imc < 18.5:
      classificacao = "Baixo peso";
      break;
    case imc > 18.5 && imc < 24.9:
      classificacao = "Peso normal";
      break;
    case imc > 25 && imc < 29.9:
      classificacao = "Sobrepeso";
      break;
    case imc > 30 && imc < 34.9:
      classificacao = "Obesidade grau I";
      break;
    case imc > 35 && imc < 39.9:
      classificacao = "Obesidade grau II";
      break;
    case imc >= 40:
      classificacao = "Obesidade grau III";
      break;
  }

  console.log(`A classificação do seu IMC é ${classificacao}`);
}

calcularIMC();

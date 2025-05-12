// 2. Escreva um programa que peça ao usuário para inserir três números e, em seguida, imprima o maior deles.

let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));
let num3 = Number(prompt("Digite o terceiro número:"));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Digite apenas números válidos!");
} else {
    let maior = num1;

    if (num2 > maior) {
        maior = num2;
    }

    if (num3 > maior) {
        maior = num3;
    }

    console.log(`O maior número é ${maior}`);
}

// 7. Escreva um programa que peça ao usuário o valor de três lados de um triângulo e classifique-o como triângulo equilátero, isósceles, escaleno ou inválido.

let lado1 = Number(prompt('Digite o número do primeiro lado do triângulo: '));
let lado2 = Number(prompt('Digite o número do segundo lado do triângulo: '));
let lado3 = Number(prompt('Digite o número do terceiro lado do triângulo: '));

if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
    console.log('Digite apenas valores numéricos');
} else if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
    console.log('O triângulo é inválido!');
} else if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    console.log('Os valores devem ser maiores que 0!');
} else if (lado1 === lado2 && lado2 === lado3) {
    console.log('O triângulo é equilátero!')
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log('O triângulo é isósceles!');
} else {
    console.log('O triângulo é escaleno!');
}
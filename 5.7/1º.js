// 1. Implemente um programa que determine se um número fornecido pelo usuário é par ou ímpar.

let numero = Number(prompt('Digite um número: '));


if (isNaN(numero)) {
    console.log('Número inválido!')
} else if (numero % 2 === 0) {
    console.log('O número é par!');
} else {
    console.log('O número é impar!');
}
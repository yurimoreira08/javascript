// 11. Escreva um programa que solicite ao usuário um número positivo e exiba todos os números ímpares de 0 até o número informado (use o laço de repetição for).

let numero = Number(prompt('Digite um numero positivo: '));

if (isNaN(numero) || numero <= 0) {
    console.log('Digite apenas números positivos');
}

for (let i = 0; i <= numero; i++) {
    if (i % 2 === 1) {
        console.log(i)
    }
}
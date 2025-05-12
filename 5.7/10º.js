// 10. Escreva um programa que solicite ao usuário um número positivo e exiba todos os números pares de 0 até o número informado (use o laço de repetição while).

let numero = Number(prompt('Digite um numero positivo: '));

if (isNaN(numero) || numero <=0) {
    console.log('Digite apenas números positivos');
}

let i = 0;

while (i <= numero) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}
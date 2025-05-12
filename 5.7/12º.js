// 12. Crie um programa que calcule o fatorial de um número fornecido pelo usuário.

let numero = Number(prompt('Digite um numero positivo: '));

if (isNaN(numero) || numero <= 0) {
    console.log('Digite apenas números positivos');
} else {
    let fatorial = 1;
    for (let i = numero; i > 1; i--) {
        fatorial *= i;
    }
    console.log(`O fatorial de ${numero} é igual a ${fatorial}`);
}
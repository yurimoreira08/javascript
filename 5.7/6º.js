// 6. Escreva um programa que solicite dois números ao usuário e verifique se pelo menos um deles é múltiplo do outro. Se pelo menos um for múltiplo, exiba a mensagem “Pelo menos um dos números é múltiplo do outro”. Caso contrário, exiba a mensagem “Nenhum dos números é múltiplo do outro”.

let numero1 = Number(prompt('Digite o primeiro número: '));
let numero2 = Number(prompt('Digite o segundo número: '));

if (isNaN(numero1) || isNaN(numero2)) {
    console.log('Digite apenas números válidos');
} else if (numero1 % numero2 === 0 || numero2 % numero1 === 0) {
    console.log('Pelo menos um dos números é múltiplo do outro');
} else {
    console.log('Nenhum dos números é múltiplo do outro');
}
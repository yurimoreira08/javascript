// 4. Desenvolva um programa que receba o ano de nascimento de uma pessoa e informe se ela já é maior de idade ou não.

let nome = prompt('Digite seu nome: ');
let ano = prompt('Digite o ano que você nasceu: ');

let idade = 2025 - ano;

if (idade >= 18) {
    console.log(`${nome} é maior de idade! Já tem ${idade} anos`);
} else {
    console.log(`${nome} é menor de idade! Ainda tem ${idade} anos`);
}


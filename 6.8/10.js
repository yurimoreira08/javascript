// 10. Usando funções, crie um programa que solicita dois números ao usuário, calcula sua média e exibe o resultado. Funções e Escopo 77 

let numero1 = Number(prompt('Digite um número: '));
let numero2 = Number(prompt('Digite outro número: '));

let calcularMedia = () => {
    let media = (numero1 + numero2) / 2;
    console.log(`A média desses dois números é ${media}`);
}

calcularMedia();
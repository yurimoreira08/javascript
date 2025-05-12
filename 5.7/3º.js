// 3. Crie um programa que recebe três notas, calcula a média e informe se o aluno foi aprovado (média maior ou igual a 7) ou reprovado (média menor que 7).

let nome = prompt('Digite o nome do aluno: ');
let nota1 = parseFloat(prompt(`Digite a primeira nota de ${nome}: `));
let nota2 = parseFloat(prompt(`Digite a segunda nota de ${nome}: `));
let nota3 = parseFloat(prompt(`Digite a terceira nota de ${nome}: `));

let media = (nota1 + nota2 + nota3) / 3;

if (media < 7) {
    console.log(`${nome} está reprovado(a), sua média foi ${media}`);
} else if (media > 7) {
    console.log(`${nome} está aprovado(a), sua média foi ${media}`);
}
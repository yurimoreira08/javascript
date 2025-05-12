// 9. Escreva um programa que solicita ao usuário o nome de 5 filmes e armazene em um Array. Em seguida, exiba no console cada um dos filmes informados usando um for tradicional.

let filmes = [];

for (let i = 0; i < 5; i++) {
  let filme = prompt(`Digite o nome do filme ${i + 1}:`);
  filmes.push(filme);
}
console.log("Sua lista de filmes:");

for (let i = 0; i < filmes.length; i++) {
  console.log(filmes[i]);
}

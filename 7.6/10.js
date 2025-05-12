// 10. Utilize a lista de filmes do exercício 1 e aplique o método forEach para exibir os nomes dos filmes e uma crítica engraçada para cada filme no console.

let filmes = [];
for (let i = 0; i < 5; i++) {
  let filme = prompt(`Digite o nome do filme ${i + 1}:`);
  filmes.push(filme);
}

console.log("Lista de filmes (usando for):");
for (let i = 0; i < filmes.length; i++) {
  console.log(filmes[i]);
}

let criticas = [
  "Tão emocionante que até a pipoca chorou!",
  "Assisti três vezes e ainda não entendi nada... obra de arte!",
  "Me fez rir, chorar e querer um reembolso, tudo ao mesmo tempo!",
  "Uma montanha-russa de emoções... e efeitos especiais duvidosos!",
  "Depois desse filme, até meu gato virou cinéfilo!",
];

console.log("\nFilmes com críticas engraçadas:");
filmes.forEach(function (filme, i) {
  console.log(`${i + 1}. ${filme} - Crítica: ${criticas[i]}`);
});

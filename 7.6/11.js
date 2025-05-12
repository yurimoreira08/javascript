// 11. Utilize a lista de filmes do exercício 1 e aplique o método for...of para exibir os nomes dos filmes e uma crítica engraçada para cada filme no console.

let filmes = [];

for (let i = 0; i < 5; i++) {
  let filme = prompt(`Digite o nome do filme ${i + 1}:`);
  filmes.push(filme);
}

let criticas = [
  "Tão épico que meu sofá virou plateia!",
  "Uma obra-prima... do jeito mais confuso possível.",
  "Mais drama que meu grupo do WhatsApp!",
  "Me fez rir até esquecer o enredo!",
  "Incrível! Mal terminei e já tô assistindo de novo (mentira, mas quase).",
];

console.log("Filmes com críticas engraçadas:");

let index = 0;
for (let filme of filmes) {
  console.log(`${index + 1}. ${filme} - Crítica: ${criticas[index]}`);
  index++;
}

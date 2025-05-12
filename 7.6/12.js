// 12. Crie uma nova lista a partir da lista de filmes do exercício 1, utilizando o método filter, para incluir apenas dois filmes que você recomendaria aos amigos. Exiba a lista de filmes recomendados no console.

let filmes = [
  "Harry Potter",
  "O Senhor dos Anéis",
  "Os Trapalhões",
  "Toy Story",
];
let filmesRecomendados = filmes.filter(function (filme) {
  return filme === "Harry Potter" || filme === "O Senhor dos Anéis";
});

console.log(`Os filmes recomendados são: ${filmesRecomendados}`);

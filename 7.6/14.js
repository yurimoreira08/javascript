// 14. Implemente uma função que recebe um título de filme como parâmetro e busca na lista de filmes do exercício 1. A função deve retornar uma mensagem informando se o filme foi encontrado ou não na lista. Exiba o resultado da busca no console.

let filmes = ["Harry Potter", "Os Trapalhões", "O Senhor dos Anéis"];

let buscarFilme = (titulo) => {
  if (filmes.includes(titulo)) {
    return `O filme ${titulo} está na sua lista`;
  } else {
    return `O filme ${titulo} não está na sua lista`;
  }
};

console.log(buscarFilme("Harry Potter"));

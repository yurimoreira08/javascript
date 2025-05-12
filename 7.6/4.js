// 4. Crie um Objeto produto com as propriedades nome,preco e quantidade. Em seguida, calcule e imprima o valor total do estoque (preço * quantidade).

let produto = {
  nome: "Chocolate",
  preco: 15,
  quantidade: 200,
};

let valorTotal = produto.preco * produto.quantidade;

console.log(`O valor total do estoque é ${valorTotal}`);

// 13. Desenvolva um conversor de moeda que solicita ao usuário o valor em Real e converta-o para Dólar. Use funções para ler os dados de entrada, realizar a conversão e exibir o resultado.

let valorReal = parseFloat(
  prompt("Digite o valor em real para converter em dólar: ")
);

let converterParaDolar = () => {
  let valorDolar = valorReal * 5.87;
  console.log(`O valor do real convertido em dólar fica ${valorDolar}`);
};

converterParaDolar();

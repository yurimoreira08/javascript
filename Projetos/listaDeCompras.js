let listaDeCompras = [];
let opcao = "";

while (opcao !== "7") {
  let opcao = prompt(
    "==== Lista de Compras ====\n" +
      "1. Adicionar item\n" +
      "2. Remover item\n" +
      "3. Pesquisar item\n" +
      "4. Ordenar lista\n" +
      "5. Exibir lista\n" +
      "6. Limpar lista\n" +
      "7. Encerrar programa\n" +
      "Escolha uma opção (1 a 7): "
  );

  switch (opcao) {
    case "1":
      let adicionarItem = prompt("Digite o item que deseja adicionar: ");
      if (adicionarItem.trim() !== "") {
        listaDeCompras.push(adicionarItem.trim());
        console.log(`"${adicionarItem}" foi adicionado à lista.`);
      } else {
        console.log("Item inválido.");
      }
      break;

    case "2":
      let removerItem = prompt("Digite o nome do item que deseja remover:");
      let i = listaDeCompras.indexOf(removerItem.trim());
      if (i !== -1) {
        listaDeCompras.splice(i, 1);
        console.log(`"${removerItem}" foi removido da lista.`);
      } else {
        console.log(`"${removerItem}" não foi encontrado na lista.`);
      }
      break;

    case "3":
      let pesquisarItem = prompt("Digite o item que deseja pesquisar:");
      if (listaDeCompras.includes(pesquisarItem.trim())) {
        console.log(`"${pesquisarItem}" está na lista de compras.`);
      } else {
        console.log(`"${pesquisarItem}" não está na lista.`);
      }
      break;

    case "4":
      listaDeCompras.sort();
      console.log(`Lista ordenada em ordem alfabética.`);
      break;

    case "5":
      if (listaDeCompras.length === 0) {
        console.log("A lista de compras está vazia.");
      } else {
        let mensagem = "Itens da sua lista:\n";
        listaDeCompras.forEach((item, i) => {
          mensagem += `${i + 1}. ${item}\n`;
        });
        console.log(mensagem);
      }
      break;

    case "6":
      listaDeCompras = [];
      console.log("Todos os itens foram removidos da lista.");
      break;

    case "7":
      console.log("Programa encerrado. Até a próxima!");
      break;

    default:
      console.log("Opção inválida. Por favor, escolha entre 1 e 7.");
  }
}

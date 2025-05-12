let listaDeFilmes = [];
let filmesAssistidos = [];
let opcao = "";

while (opcao !== "7") {
  opcao = prompt(
    "Escolha as opções de acordo com os números.\n" +
      "1-Adicionar filme\n" +
      "2-Remover filme\n" +
      "3-Pesquisar filme\n" +
      "4-Ordenar a lista\n" +
      "5-Exibir a lista\n" +
      "6-Marcar como assistido\n" +
      "7-Encerrar o programa\n" +
      "Digite aqui sua escolha: "
  );

  switch (opcao) {
    case "1":
      let adicionarFilme = prompt(
        "Digite o nome do filme que deseja adicionar: "
      );
      listaDeFilmes.push(adicionarFilme);
      break;

    case "2":
      let removerFilme = prompt("Digite o nome do filme que deseja remover: ");
      let i = listaDeFilmes.indexOf(removerFilme.trim());
      if (i !== -1) {
        listaDeFilmes.splice(i, 1);
        console.log(`O filme ${removerFilme} foi removido.`);
      } else {
        console.log(`O filme ${removerFilme} não foi encontrado na lista.`);
      }
      break;

    case "3":
      let pesquisarFilme = prompt(
        "Digite o nome do filme que deseja pesquisar: "
      );
      if (listaDeFilmes.includes(pesquisarFilme.trim())) {
        console.log(`O filme ${pesquisarFilme} está na lista.`);
      } else {
        console.log(`O filme ${pesquisarFilme} não está na lista.`);
      }
      break;

    case "4":
      listaDeFilmes.sort();
      console.log("Lista ordenada em ordem alfabética.");
      break;

    case "5":
      if (listaDeFilmes.length === 0) {
        console.log("A lista de filmes está vazia.");
      } else {
        let mensagem = "Filmes da sua lista:\n";
        listaDeFilmes.forEach((filme, i) => {
          mensagem += `${i + 1}. ${filme}\n`;
        });
        console.log(mensagem);
      }
      break;

    case "6":
      let marcarComoAssistido = prompt(
        "Digite o nome do filme que deseja marcar como assistido: "
      );
      filmesAssistidos.push(marcarComoAssistido);
      let mensagem = "Filmes Assistidos:\n";
      filmesAssistidos.forEach((filme, i) => {
        mensagem += `${i + 1}. ${filme}\n`;
      });
      console.log(mensagem);
      break;

    case "7":
      console.log("Programa encerrado. Até a próxima!");
      break;

    default:
      console.log("Opção inválida. Por favor, escolha entre 1 e 7.");
  }
}

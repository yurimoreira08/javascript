// 6. Crie uma função que recebe um nome completo do usuário e imprime o primeiro e último nome.

function receberNome() {
  let nomeCompleto = prompt("Digite aqui seu nome completo: ");
  let partes = nomeCompleto.trim().split(" ");
  let primeiroNome = partes[0];
  let ultimoNome = partes[partes.length - 1];
  console.log(
    `O primeiro nome é ${primeiroNome}, e o último nome é ${ultimoNome}`
  );
}

receberNome();

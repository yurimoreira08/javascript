// 7. Crie uma função que recebe um nome completo do usuário e imprime somente o primeiro.

let receberNome = () => {
  let nomeCompleto = prompt("Digite seu nome completo: ");
  let partes = nomeCompleto.trim().split(" ");
  let primeiroNome = partes[0];
  console.log(`O primeiro nome é ${primeiroNome}`);
};

receberNome();

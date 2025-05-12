// 12. Crie uma calculadora que faça a adição, subtração, multiplicação ou divisão de dois números. Use funções separadas para cada operação e para exibir o resultado.

let numero1 = Number(prompt("Digite um número "));
let numero2 = Number(prompt("Digite outro número"));

let adicao = () => {
  let soma = numero1 + numero2;
  console.log(`A soma desses dois números é ${soma}`);
};

let subtracao = () => {
  let subtrair = numero1 - numero2;
  console.log(`A subtração desses dois números é ${subtrair}`);
};

let multiplicacao = () => {
  let multiplicar = numero1 * numero2;
  console.log(`A multiplicação desses dois números é ${multiplicar}`);
};

let divisao = () => {
  let dividir = numero1 / numero2;
  console.log(`A divisão desses dois números é ${dividir}`);
};

adicao();
subtracao();
multiplicacao();
divisao();

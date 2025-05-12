// 5. Faça um programa que converte uma temperatura de Celsius para Fahrenheit ou vice-versa, dependendo da escolha do usuário.

let escolha = Number(prompt('Escolha 1 para tranformar de Celsius para Fahrenheit.\nEscolha 2 para transformar de Fahrenheit para Celsius.\nDigite aqui: '));

switch (escolha) {
    case 1:
        let temperaturaCelsius = Number(prompt('Digite a temperatura em Celsius: '));
        let resultadoFahrenheit = (temperaturaCelsius * 1.8) + 32;
        console.log(`A temperatura convertida de Celsius para Fahrenheit é ${resultadoFahrenheit}`);
    break;
    case 2:
        let temperaturaFahrenheit = Number(prompt('Digite a temperatura em Fahrenheit: '));
        let resultadoCelsius = (temperaturaFahrenheit - 32) / 1.8;
        console.log(`A temperatura convertida de Fahrenheit para Celsius é ${resultadoCelsius}`);
    break;
    default:
        console.log('Escolha uma opção válida');
}
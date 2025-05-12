// 9. Reescreva todas as funções anteriores usando a estrutura de arrow function.

let mensagem = () => {
    console.log('Olá mundo');
}

let calcularMedia = (numero1, numero2, numero3) => {
    let media = (numero1 + numero2 + numero3) / 3;
    console.log(`A média desses três números é ${media}`);
}

let calcularQuadrado = (numero) => {
    let quadrado = numero **2;
    console.log(`O quadrado desse número é ${quadrado}`);
}

mensagem();
calcularMedia();
calcularQuadrado();
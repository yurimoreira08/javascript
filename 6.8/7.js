// 7. Declare uma variável global e uma local dentro de uma função. Tente acessá- -las de diferentes partes do código para entender o escopo. 

let global = 'Só pra testar';

let funcao = () => {
    let local = 'Só pra testar, só que dentro';
    console.log(`Essa é a variável global: ${global}\nEssa é a variável local: ${local}`);
}

funcao();

// console.log(`Aqui é só pra testar, mas já sabendo que vai dar erro: ${local}`);
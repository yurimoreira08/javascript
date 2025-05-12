// 8. Crie uma função que declara uma variável dentro de um bloco de código (por exemplo, um if) e tente acessá-la fora desse bloco para entender o escopo local do bloco.

let testeEscopo = () => {
    if (true) {
        let dentroDoBloco = "Estou dentro do bloco!";
        console.log(dentroDoBloco); //Funciona aqui
    }

    console.log(dentroDoBloco); //Não existe aqui fora!
}

testeEscopo();
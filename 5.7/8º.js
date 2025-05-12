// 8. Crie um programa que simula um restaurante. O usuário escolhe um prato do menu (opções: pizza, hambúrguer, salada, macarrão) usando a instrução switch. Para cada prato escolhido, exiba o preço e a descrição do prato.

let opcoes = prompt('Escolha suas opções de comida. Temos pizza, hambúrguer, salada e macarrão.\nDigite aqui sua escolha: ');

switch (opcoes) {
    case 'pizza':
        console.log('O valor da pizza é 50 reais.\nO sabor da pizza você escolhe de acordo com o seu gosto, aproveite sua experiência e obrigado pela a preferência!');
        break;
    case 'hambúrguer':
        console.log('O valor do hambúrguer é 20 reais.\nO hambúrguer mais saboroso da cidade, aproveite sua experiência e obrigado pela a preferância!');
        break;
    case 'salada':
        console.log('O valor da salada é 5 reais.\nTemos os melhores itens de salada para lhe satisfazer, aproveite sua experiência e obrigado pela a preferência!');
        break;
    case 'macarrão':
        console.log('O valor do macarrão é 10 reais.\nO melhor macarrão de toda a cidade, aproveite sua experiência e obrigado pela a preferância!');
        break;
        default:
            console.log('Escolha uma opção válida.\nOBS: Digite igualmente ao cardápio.');
}
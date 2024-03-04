//Soma o preço de custo com a margem de lucro
function adicionarMargemDeLucroNoProduto(precoDeCustoDoProduto, MargemDeLucro) {
    let margemDeLucro = MargemDeLucro / 100;
    let produtoComMargemDeLucroInclusa = (precoDeCustoDoProduto * margemDeLucro) + precoDeCustoDoProduto;
    return produtoComMargemDeLucroInclusa;
}

//Calcular perda para shopee SEM contar o programa frete grátis
function shopeeSemFG(produtoComMargemDeLucroInclusa) {
    let comissaoShopee = 14 / 100;
    let custoFixoTresReais = 3;
    let perdaParaShopeeSemFreteGratis = Math.min((produtoComMargemDeLucroInclusa * comissaoShopee) + custoFixoTresReais, 100);
    return perdaParaShopeeSemFreteGratis;
}

//Calcular perda para shopee COM o programa frete grátis
function shopeeComFG(produtoComMargemDeLucroInclusa) {
    let comissaoShopee = 14 / 100;
    let taxaDeFreteGratisShopee = 6 / 100;
    let custoFixoTresReais = 3;
    let perdaParaShopeeComFreteGratis = Math.min((produtoComMargemDeLucroInclusa * (comissaoShopee + taxaDeFreteGratisShopee)) + custoFixoTresReais, 100);
    return perdaParaShopeeComFreteGratis;
}

//Calcular perda para shopee em produtos menores que R$6,00
function shopeeMenorQ6Reais(produtoComMargemDeLucroInclusa) {
    let perdaParaShopeeProdutoMenorQue6Reais = produtoComMargemDeLucroInclusa / 2;
    return perdaParaShopeeProdutoMenorQue6Reais;
}

//Calcular o imposto do governo sobre o preço final do produto
function perdaParaGover(produtoComMargemDeLucroInclusa) {
    let impostoParaGoverno = 9 / 100;
    let perdaParaGover = produtoComMargemDeLucroInclusa * impostoParaGoverno;
    return perdaParaGover
}

//Verifica que tipo de taxa irá ser calculada para a shopee
function verificarCondicional(produtoComMargemDeLucroInclusa, value) {
    let aux = null;
    if (produtoComMargemDeLucroInclusa < 6) {
        aux = shopeeMenorQ6Reais(produtoComMargemDeLucroInclusa)
        produtoComMargemDeLucroInclusa - aux


    } else {
        if (value === 'yes') {
            aux = shopeeComFG(produtoComMargemDeLucroInclusa)
            aux = produtoComMargemDeLucroInclusa - aux
            
        } else if (value === 'no') {
            aux = shopeeSemFG(produtoComMargemDeLucroInclusa)
            produtoComMargemDeLucroInclusa - aux
        };
    };
    return perdaParaGover(aux)
}



let value = 'yes'; // Defina o valor de value
let produtoComMargemDeLucroInclusa = 10; // Defina o valor de produtoComMargemDeLucroInclusa
let aux = verificarCondicional(produtoComMargemDeLucroInclusa, value)
console.log(aux)



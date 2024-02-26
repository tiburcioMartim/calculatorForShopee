function calcular(event) {
    event.preventDefault(); // Não permite o reload automatico do envio de formulário. Isso não deixa zerar os dados.

    taxas = {
        cartao: 0.06,
        gov: 0.09,
        iof: 0.05,
        shopee: 0.18,
        freteGratis: 0.06,
        custoFixo: 3.00,
    }

    let inputPrecoVenda = document.getElementById('inputPrecoVenda');
    let precoVenda = parseFloat(inputPrecoVenda.value); // 4.00

    let inputPrecoCusto = document.getElementById('precoCusto');
    let precoCusto = parseFloat(inputPrecoCusto.value); // 2.00

    let margemLucro = 0;
    let lucro = 0;
    let descShopee = 0;

    if (precoVenda < 6){
        descShopee = precoVenda / 2; // 4 * 0.24 + 3 === 
    } else {
        descShopee = Math.min((precoVenda * (taxas.shopee + taxas.freteGratis)) + taxas.custoFixo, 100); // 3.96
    }

    let descGov = precoVenda * (taxas.gov + taxas.iof); // 0.56
    let produtoComDesc = (precoVenda - (descShopee + descGov)); // (18.00 - (3.96 + 0.56)) === 8.16
    lucro = precoVenda - (precoCusto + produtoComDesc);
    margemLucro = ((precoVenda - (precoCusto + produtoComDesc)) / precoVenda); // ((4.00 - (2.00 + 4,52)) / 4.00) === 0.0683  (06.83%)

    let resultadoFinal = document.getElementById('resultadoFinal');
    resultadoFinal.innerHTML = `<br><br>
                                <table>
                                    <thead>
                                        <tr><h2><strong>Taxas:</strong></h2></tr>
                                    </thead>
                                    <tbody>
                                        <tr>Gov: <strong>${taxas.gov * 100}%</strong> <br></tr>
                                        <tr>IOF: <strong>${taxas.iof * 100}%</strong> <br></tr>
                                        <tr>Shopee: <strong>${taxas.shopee * 100}%</strong> <br></tr>
                                        <tr>Frete grátis: <strong>${taxas.freteGratis * 100}%</strong> <br></tr>
                                        <tr>Custo fixo: <strong>R$ ${taxas.custoFixo.toFixed(2)}</strong> <br></tr>
                                        <hr style="width: 200px;">
                                        <tr><h2>Descontos: <strong>R$ ${(produtoComDesc).toFixed(2)}</strong></h2></tr>
                                        <tr><h2>Margem de lucro: <strong>${(margemLucro * 100).toFixed(2)}%</strong></h2></tr>
                                        <tr><h2>Lucro: <strong>R$ ${(lucro).toFixed(2)}</strong></h2></tr>
                                    </tbody>
                                </table>`;
}


/*
precoVenda= 18.00
precoCusto= 8,61

descShopee= (precoVenda= 18.00 * (shopee: 0.18 + freteGratis: 0.06) + custoFixo: 3.00, 100) === descShopee= 7.32
descGov = precoVenda= 18.00 * (gov= 0.09 + iof= 0.05) === descGov= 2.52
produtoComDesc = (precoVenda= 18.00 - (descShopee= 7.32 + descGov= 2.52)) === produtoComDesc= 8.16
margemLucro = 

*/



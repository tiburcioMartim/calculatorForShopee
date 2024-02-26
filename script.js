function calcular(event){ 
    event.preventDefault();

    taxas = {
        cartao: 0.06,
        gov: 0.09,
        iof: 0.05,
        shopee: 0.18,
        freteGratis: 0.06,
        custoFixo: 3.00,        
    }

    let valorCustoProduto = document.getElementById('valorCustoProduto');
    let valorCusto = parseFloat(valorCustoProduto.value);// 600

    let margemDeLucro = document.getElementById('margemDeLucro');
    let margemLucro = parseFloat(margemDeLucro.value); // 30
    margemLucro /= 100; // 0.30

    let rendimentoShopee = Math.min((valorCusto * (taxas.shopee + taxas.freteGratis)) + taxas.custoFixo, 100); // (600 * (0.24) + 3.00, 100) === rendimentoShopee= 147.00 ~~> 100.00
    

    let rendShopCustoMargemLucro = (rendimentoShopee + valorCusto) * margemLucro; // (100.00 + 600.00) * 0.30 === rendShopCustoMargemLucro= 210.00
    let impostosGov = (rendShopCustoMargemLucro + valorCusto) * (taxas.gov + taxas.iof); // (210.00 + 600.00) * (0.14) === impostosGov= 113.4
    let precoFinalProduto = valorCusto + rendShopCustoMargemLucro + impostosGov; // 600.00 + 210.00 + 113.4 === precoFinalProduto= 923.40

    let resultadoFinal = document.getElementById('resultadoFinal');
    resultadoFinal.innerHTML = 
    `<br><br>
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
            <tr>Margem de lucro: <strong>${margemLucro * 100}%</strong> <br></tr>
            <hr style="width: 200px;">
            <tr><h2>Total: <strong>R$ ${precoFinalProduto.toFixed(2)}</strong></h2></tr>
        </tbody>
    </table>`;
}

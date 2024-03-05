function calcular(event) {
    event.preventDefault(); // Não permite o reload automatico do envio de formulário. Isso não deixa zerar os dados.

    const inputPrecoCusto = document.getElementById('inputPrecoCusto');
    const precoCusto = parseFloat(inputPrecoCusto.value);

    const inputMargemLucro = document.getElementById('margemLucro');
    const margemLucro = parseFloat(inputMargemLucro.value);

    const inputIsFreteGratisSim = document.getElementById('freteGratisSim');
    const inputIsFreteGratisNao = document.getElementById('freteGratisNao');

    let produtoComMargemDeLucroInclusa = adicionarMargemDeLucroNoProduto(precoCusto, margemLucro)
    let freteGratis = null;


    let valueCalculate = null;
    if (inputIsFreteGratisSim.checked) {
        freteGratis = inputIsFreteGratisSim.value;
        valueCalculate = verificarCondicional(produtoComMargemDeLucroInclusa, freteGratis)
        valueCalculate = produtoComMargemDeLucroInclusa - valueCalculate


    } else if (inputIsFreteGratisNao.checked) {
        freteGratis = inputIsFreteGratisNao.value;
        valueCalculate = verificarCondicional(produtoComMargemDeLucroInclusa, freteGratis)
        valueCalculate = produtoComMargemDeLucroInclusa - valueCalculate
    }




    let resultadoFinal = document.getElementById('resultadoFinal');
    resultadoFinal.innerHTML = `<br><br>
                                <table>
                                    <thead>
                                        <tr><h2><strong>Taxas:</strong></h2></tr>
                                    </thead>

                                    <tbody>
                                        <tr>Gov: <strong>9%</strong> <br></tr>
                                        <tr>Shopee: <strong>14%</strong> <br></tr>
                                        <tr>Frete grátis: <strong>6%</strong> <br></tr>
                                        <tr>Custo fixo: <strong>R$ 3,00</strong> <br></tr>
                                        <hr style="width: 200px;">

                                        <tr><h2>Valor à cobrar: <strong>R$ ${valueCalculate}</strong></h2></tr>
                                    </tbody>
                                </table>`;
};
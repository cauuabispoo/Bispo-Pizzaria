// Captura todos os gerals que fizeram encomendas
var geral = document.querySelectorAll(".geral");

// Passa por cada geral, calculando o valor total
geral.forEach(function(geral) {
    // Captura a quantidade encomendada
    var qtde = parseInt(geral.querySelector(".qtd").textContent);

    // Captura o valor unitário do produto
    var unitario = parseFloat(geral.querySelector(".valor").textContent);

    // Valida a quantidade
    if (qtde < 1 || isNaN(qtde)) {
        // Quantidade NOK, avise o usuário
        geral.querySelector(".qtd").textContent = "QTDE INVÁLIDA!";
        geral.querySelector(".qtd").style.color = "red";
    } else if (unitario < 1 || isNaN(unitario)) {
        // Valor NOK, avise o usuário
        geral.querySelector(".valor").textContent = "VALOR INVÁLIDO!";
        geral.style.backgroundColor = "red";
    } else {
        // Quantidade OK, pode prosseguir
        // Calcula o valor total da encomenda
        geral.querySelector(".total").textContent = calculaTotal(qtde, unitario);
    }
});

// Função para calcular o valor total da encomenda
function calculaTotal(qtde, unitario) {
    var total = 0;
    total = qtde * unitario;
    return total;
}
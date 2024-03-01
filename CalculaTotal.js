// Captura todos os gerals que fizeram encomendas
var geral = document.querySelectorAll(".geral");

// Passa por cada geral, calculando o valor total
geral.forEach(function(geral) {
    // Captura a quantidade encomendada
    var qtde = parseInt(geral.querySelector(".qtd").textContent);

    // Captura o valor unitário do produto
    var unitario = parseFloat(geral.querySelector(".valor").textContent);
    geral.querySelector(".valor").textContent = formatacao(unitario);

    // Valida a quantidade
    if (validaQtde(qtde) == false) {
        // Quantidade NOK, avise o usuário
        geral.querySelector(".qtd").textContent = "QTDE INVÁLIDA!";
        geral.querySelector(".qtd").style.color = "red";
        // Valida o valor
    } else if (validaValor(unitario) == false) {
        // Valor NOK, avise o usuário
        geral.querySelector(".valor").textContent = "VALOR INVÁLIDO!";
        geral.style.backgroundColor = "red";
    } else {
        // Quantidade OK, pode prosseguir
        // Calcula o valor total da encomenda
        geral.querySelector(".total").textContent = formatacao(calculaTotal(qtde, unitario));
    }
});

// Valida a Quantidade
function validaQtde(qtde){
    valida = true;
    if(qtde < 1 || isNaN(qtde)){
        valida = false;
    } 
    return valida
}

// Valida o Valor
function validaValor(valor){
    valida = true;
    if(valor < 1 || isNaN(valor)){
        valida = false;
    } 
    return valida
}

// Fomata os valores para Real e converte para Float
function formatacao(valor){
    parseFloat(valor);
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}

// Função para calcular o valor total da encomenda
function calculaTotal(qtde, unitario) {
    var total = 0;
    total = qtde * unitario;
    return total;
}
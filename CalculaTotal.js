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

function Imprimir() {
    var Tabela = document.querySelector(".tabela-encomendas");
    var linha = Tabela.insertRow();

    var linha1 = linha.insertCell(0);
    var linha2 = linha.insertCell(1);
    var linha3 = linha.insertCell(2);
    var linha4 = linha.insertCell(3);
    var linha5 = linha.insertCell(4);

    var nome = document.getElementById("nome").value;
    var prod = document.getElementById("pizza").value;
    var quant = document.getElementById("qnt").value;
    var ValorU = document.getElementById("ValorU").value;
    var Total = document.querySelector(".total").value;
    
    linha1.textContent = nome;
    linha2.textContent = prod;
    linha3.textContent = quant;
    linha4.textContent = ValorU;
    
    if (validaValor(ValorU) == false && validaQtde(quant) == false) {
        linha4.textContent = "VALOR INVÁLIDO!";
        linha4.style.backgroundColor = "red";

        linha3.textContent = "QTDE INVÁLIDA!";
        linha3.style.color = "red";
    } else if (validaQtde(quant) == false) {
        linha3.textContent = "QTDE INVÁLIDA!";
        linha3.style.color = "red";
    } else if (validaValor(ValorU) == false) {
        linha4.textContent = "VALOR INVÁLIDO!";
        linha4.style.backgroundColor = "red";
    } else {
        linha4.textContent = formatacao(parseFloat(ValorU));
        linha5.textContent = formatacao(calculaTotal(quant, ValorU));
    }

    }

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
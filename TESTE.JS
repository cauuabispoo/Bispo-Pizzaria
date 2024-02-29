var titulo = document.querySelector(".titulo-pizza");
titulo.textContent = "Lista de encomendas";

var qtd = document.querySelector(".qtd");
var valor = document.querySelector(".valor");
var total = document.querySelector(".total");

var geral = document.querySelectorAll(".geral");


for(var i =0; i < geral.length; i++){
 geral[i].total.textContent = geral[i].valor.textContent * geral[i].qtd.textContent;
}
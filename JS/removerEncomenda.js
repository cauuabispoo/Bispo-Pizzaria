// var encomendas = document.querySelectorAll(".geral");

// encomendas.forEach(function(linha){
//     linha.addEventListener("dblclick", function(){
//         this.remove();
//     });
// });

var tabela = document.querySelector("tbody");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
});
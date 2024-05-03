// var encomendas = document.querySelectorAll(".geral");

// encomendas.forEach(function(linha){
//     linha.addEventListener("dblclick", function(){
//         this.remove();
//     });
// });

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
});
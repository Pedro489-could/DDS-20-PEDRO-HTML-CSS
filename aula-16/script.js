//Console - terminal do navegador
console.log(console)

//Window - Janela do navegador 
//window.alert("Sim") 
//alert("Não")

//Document = DOM ou seu código html inteiro

console.log(document);
console.log(document.head);
console.log(document.body);

//Acessar elementos do body

//Pega elementos pela tag
var titulos = document.getElementsByTagName("h1")
console.log(titulos);

//Pega elementos pela class
var paragrafos = document.getElementsByClassName("para")
console.log(paragrafos);

//Pega elento pelo id
var especifico = document.getElementById("p3")
console.log(especifico);

//Modificando propriedades de algum elemento

// pego por id
especifico.style.backgroundColor = "red"
especifico.style.backgroundColor = "yellow"

//pago por class
paragrafos[0].style.backgroundColor= "pink"

//pago por tag
titulos[2].style.backgroundColor = "orange"

function cliquei(){
    console.log("Eu falie para você não clicar");  
}

//Crie um botão , que altere todos os títulos para verde, e aumente a fonte para 100px

function Luke () {
    for(var i = 0; i < titulos.length;i++){
    titulos[i].style.backgroundColor = "green"
    titulos[i].style.color = "blue"
    titulos[i].style.fontSize = "100px"
    }
}

function quemFoi(elemento){
    console.log(elemento);
    
}
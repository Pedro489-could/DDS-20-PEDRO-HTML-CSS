//Mosstra um messagem para o consele 
//console.log("Salve , tó com fome")

//Caixinha de alerta
//alert("Testando aqui para ver se vai  ")

//var nome  = "Bruce"
//var numero = 8
//var pulo = 2.20
//var cavaleiro = true

//console.log("O nome:" + nome);
//console.log("De número:",numero);
//console.log(pulo);
//console.log(cavaleiro);

//console.log(typeof(pulo))

//var nulo = null
//var indefinido = undefined

//console.log(typeof(nulo))
//console.log(typeof(indefinido))


//OPERADORES ARITIMETICOS 
//+,-,*,/,%

//var a = 10 , b = 5

//console.log("Soma",a+b);
//console.log("Ssubitração",a-b);
//console.log("Multi",a*b);
///console.log("Div",a/b);
//console.log("Módulo",a%b);
//console.log("Fim");


//OPERADORES LÓGICOS
//E , OU , NÃO
//&&,||,!

//var verdade = true
//var mentira = false

//console.log(verdade && mentira);
//console.log(verdade || mentira);
//console.log(verdade &&! mentira);

//OPERADORES RELACIONAIS
//>,<.>=;<=,==,!=,===,!==

//var x = 65 , y = 32, z = "65"

//console.log(x > y);
//console.log(x < y);
//console.log(x >= y);
//console.log(x <= y);
//console.log(x == y);
//console.log(x != y);

//console.log(x === z );
//console.log(x !== z );

//Interagir com o úsuario

//var héroi = prompt("Digite seu héroi de coração:")

//console.log("Seu héroi é :" ,héroi);

//DESVIOS CONDICIONAIS
// If = se

var estaVivo = true

if(estaVivo == true){
    console.log("Você está vivo 🧙🏼‍♂️");
}
else if (estaVivo){
    console.log("Está morto 💀"); 
}
else{
    console.log("Você não é porra nemhuma 🩻");
    
}
// SWITCH = ESCOLHA

var camisa = "laranja"

switch(camisa){
    case "Azul":
        console.log("Ganhou um vaucher");
        break
       
        case "Branco":
        console.log("Ganhou playstation");
        break

        case "Vermelho":
        console.log("Ganhou ferrari");
        break
        default:
            console.log("Camisa errada");
            break
}


//LAÇOS DE REPETIÇÃO = LOOPS
// FOR = PARA 

for(var i = 0; i < 5; i++){ 
    console.log("Carry on ");
}
console.log("Acabou o for");

//WHILE = ENQUANTO 

var c = 1 
while (c < 10) {
    console.log("Entrei no loop");
      c++ 
}
  
//Funções
//Só execuçao
function teste() {
    console.log("Funcionou sim o teste ")
}

teste()

//Com parametro
function teste2 (parametro){
    console.log(" O parametro é:" , parametro);
    
}
teste2("carne")

// Com retorno

function cauculo(n1, n2) {
    let resultado = n1 + n2
    return resultado    
}
var final = cauculo(3,5)
console.log("A conta deu :" , final);

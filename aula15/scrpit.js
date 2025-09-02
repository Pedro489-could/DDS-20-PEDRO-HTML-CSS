//Com array
var alunos = ["Pedro","Tiago","Barquinho"]
var media = [7,8,4]

console.log("O aluno" ,alunos [0], "teve média de", media[2])

//criando um objeto
var aluno1 = {
    //chave :"Valor",
    nome :  "Pedro",
    meida: 7
}

var aluno2 = {
    nome : "Jonas",
    media:9
}
//Acessa todo o objeto 
console.log(aluno1)

//Acessar uma propriedade daquelo bojeto
console.log(aluno1.nome);
console.log(aluno2.media);

//Crie um objeto
var intervalo = {
    horaInicio : "20h00",
    horaFim : "21h00",
    duracao : "10min",
     local : "Pátio"
}
console.log("O intervalo inia ás", intervalo.horaInicio,"E finaliza",intervalo.horaFim,);

//Acessando um valor passando uma chave
console.log("Onde : ",intervalo["local"]);

//Criando um objeo vazio 
var garrafa = {}
console.log(garrafa);

//Adicione uma propriedade em um objeto já existente
garrafa.cor = "Azul"
garrafa.preco = 600
garrafa.tamanho = "2L"
garrafa["marca"] = "Stanlay"

console.log(garrafa);

//Alterar uma propriedade já existente
garrafa.cor = "Roxo"
garrafa["marca"]= "Topoué"
console.log(garrafa);

//Peça ao usuário , uma nova propriedade e um novo valor pra ser adciconado na garrafa
var novaPropriedade = prompt("Nova propriedade")
garrafa["novaPropriedade"] = prompt ("Digite um valor:")

console.log(garrafa);
console.log(garrafa.quantidade);

//Cria métodos 
var animal1 = {
    nome : "Tom",
    especie : "Gato",
    raca : "Adidas",
    andar : function() {
        console.log("Olá , Estou andando");
        
    },
    falar:function () {
        console.log("MIAAAAAAAAAAAAUUUUUU");
    }
}
console.log(animal1);
animal1.andar (animal1.andar)
animal1.andar()

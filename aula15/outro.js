var prodto1 = {
    nome : "Coca cola",
    categoria : "Bebidas",
    quantidade: 30,
    tamanhos : ["200ml","Lata","600ml", "2L"],
        //Criação de um méto
    descricao: function(){
          //Uso do this como referencial
        console.log("Meu produto",this.nome,"é da categoria", this.categoria)
    
    },
    verTamanhos : opcaoes 
}
var prodto2 = {
    nome:"Salgado",
    categoria : "Comida",
    quantidade: 10,
    tamanhos : ["Pequeno", "Médio","Grande"],
    descricao: function (){
        console.log("O produto ", this.nome, "é da categoria" , this.categoria )
        
    },
      verTamanhos : opcaoes 
}
//prodto1.descricao() prodto2.descricao()

function opcaoes(){
    /*
    let tmhs = ""
    for (var i in this.tamanhos){
        tmhs += this.tamanhos [i] + ","
    }
    console.log("As opções são:",tmhs);
    */
   console.log("As opções são :", this.tamanhos. toString())
}
prodto1.verTamanhos()
prodto1.descricao()

prodto2.descricao()
prodto2.verTamanhos()

//Cire um terceiro produto , pedindo as informações do mesmo , para o usuário através do prompt

var prodto3 = {
    personagem : prompt ("perssonagem"),
    quantidade: prompt("quantidade" ), 

    descricao : function (){
        console.log("O nome ", this.personagem, "é a quantidade" , this.quantidade )
    },
    verTamanhos:opcaoes
}

prodto3.descricao()
prodto3.verTamanhos()

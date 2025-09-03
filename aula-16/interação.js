
function troca(elementoQuechamou){
    //console.log(elementoQuechamou);

  let textoNovo =elementoQuechamou.value
    
  let textoAntigo =document.getElementById("textoTrocar")

  textoAntigo.innerText = textoNovo
  
}

function trocaAgora(elementoQuechamou){
    //console.log(elementoQuechamou);

  let textoNovo =elementoQuechamou.value
    
  let textoAntigo =document.getElementById("textoTrocarAgora")

  textoAntigo.innerText = textoNovo
  
}

function viraVerde(elemento){
    elemento.style.color = "green"
    elemento.style.fontSize = "100px"
}

function viraAzul(elemento){
    elemento.style.color = "blue"
    elemento.style.fontSize = "10px"
}
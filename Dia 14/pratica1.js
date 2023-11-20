var perguntaNome
var perguntaSalario

function salario(){
    perguntaNome = prompt("Insira um nome")
    perguntaSalario = Number(prompt("Insira um salário"))
    calcularSalario(perguntaNome, perguntaSalario)
}
function calcularSalario(perguntaNome, perguntaSalario){
    var aumento = 0

    if(perguntaSalario<=1500){
        aumento = 0.2
    }
    if( perguntaSalario>1500 && perguntaSalario <=2000){
        aumento = 0.15
    }
    if( perguntaSalario>2000 && perguntaSalario <=3000){
        aumento = 0.1
    }
    if(perguntaSalario>=3001){
        aumento=0.05
    }
    var novoSalario = perguntaSalario+(perguntaSalario*aumento)
    console.log(`Nome do colaborador ${perguntaNome}`)
    console.log(`Salário: ${perguntaSalario}`)
    console.log(`Aumento: ${aumento*100} %`)
    console.log(`Seu novo salário será de ${novoSalario}`)

}

salario()

function perguntaNovamente(){
    var perguntaDeNovo=prompt("Digite 1 para colocar os dados novamente")
    if(perguntaDeNovo == "1"){
        salario()
    }

}
perguntaNovamente()
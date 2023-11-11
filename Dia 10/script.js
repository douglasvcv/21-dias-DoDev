let nomes = []
let continuar = true
let posiçaoDoArray = 0
while(continuar){
    let nomeInserido = prompt("Insira um nome")
    nomes[posiçaoDoArray] = nomeInserido
    let desejaContinuar = prompt("Digite 's' para continuar")
    if(desejaContinuar != "s"){
        continuar = false
    }
    posiçaoDoArray++
}
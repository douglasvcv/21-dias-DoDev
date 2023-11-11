/*for(let i = 1; i<=10;i++){
    let numero = Number(prompt('Insira um número'))
    numeroArray[indice] = numero
    indice++
}
console.log(numeroArray)

console.log("Segundo desafio")

console.log(numeroArray.sort().reverse())*/

console.log('Terceiro desafio')
let numeroArray = []
let indice = 0
condiçao = true
while(condiçao == true){
    let numero = Number(prompt('Insira um número'))
    numeroArray[indice] = numero
    indice++
    var resposta = prompt('Deseja continuar? (s/n)')
    if(resposta != "s"){
        condiçao = false
    }
}
console.log(numeroArray.sort().reverse())
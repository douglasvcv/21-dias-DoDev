let nomes = []
let notas = []
let indice = 0
condinçao = true
while(condinçao == true){
    var perguntaNome = prompt("Insira o nome do aluno")
    var perguntaNota = Number(prompt("Insira a nota do aluno"))
    nomes[indice] = perguntaNome
    notas[indice] = perguntaNota
    var soma = notas.reduce((sumparcial, a) => sumparcial + a, 0)
    indice++
    let perguta = prompt("Digite (s) para inserir mais dados")
 if(perguta != "s"){
    condinçao =false
 }
}

console.log(`As notas foram ${notas}. A soma delas foi de ${soma}. A média geral da turma foi de ${soma/notas.length}`)


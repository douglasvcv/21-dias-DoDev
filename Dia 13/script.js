class Aluno {
    nome
    idade
    areaAtuaçao

    constructor(nome, idade){
        this.nome=nome
        this.idade=idade
    }
}
let alunos = []
let condition = true
let index = 0
while(condition){
    let nome = prompt("Insira o nome do aluno")
    let idade = prompt("Insira a idade do aluno")
    let aluno = new Aluno(nome, idade)
    let areaAtuaçao = prompt("Insira a área de atuação do aluno")
    aluno.areaAtuaçao = areaAtuaçao
    alunos[index]=aluno
    index++
    let question = prompt("Digite 1 para continuar cadastrando alunos")
    if(question != "1"){
        condition=false
    }
}
console.log(alunos)
let nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual a sua idade?")
let carteira = prompt("Possui carta?")
let carro = prompt("Possui carro?")

if(idade < 18 || carteira == "não"){
    console.log(nome + ", você não pode dirigir!")
}if(idade >= 18 && carteira == "sim" && carro == "não"){
    console.log( nome +", você pode dirigir, mas não tem carro!")
}if(idade >= 18 && carteira == "sim" && carro == "sim"){
    console.log(nome + ", você será o motorista")
}
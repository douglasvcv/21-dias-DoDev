let num1 = Number(prompt("Digite um número"))
let num2 = Number(prompt("Digite outro número"))
let operaçao = prompt("Escolha a operação")

switch(operaçao){
    case "adição":
        console.log(num1+num2)
        break
    case "subtração":
        console.log(num1-num2)
        break
    case "multiplicação":
        console.log(num1*num2)
        break
    case "divisão":
        console.log(num1/num2)
        break
        default:
            console.log("erro!!")
}
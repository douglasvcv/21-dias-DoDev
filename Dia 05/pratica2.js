let combustivel = prompt("Vai fazer o que?")
switch(combustivel){
    case "gasolina":
        let valor = Number(prompt("Escolha o valor"))
        console.log(valor/5 +" Litros")
        break
    case "álcool":
        let val = Number(prompt("Escolha o valor"))
        console.log(val/3 + " Litros")
        break
    case "calibrar":
        console.log("pneus calibrados com sucesso")
        break
}
var idade = Number(prompt("Diga sua idade"))

switch(true){
    case idade <= 10:
        console.log("Você é criança")
        break
    case idade <= 20:
        console.log("Você é jovem")
        break
    default:
        console.log('teste')
}

/*switch(idade){
    case 10:
        console.log("Você tem 10 anos")
        break
    case 15:
        console.log("Você tem 15 anos")
        break
    default:
        console.log('teste')
}*/
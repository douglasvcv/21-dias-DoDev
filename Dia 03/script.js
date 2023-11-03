let nome = prompt("Digite seu nome.")
let idade = prompt("Digite sua idade.")
let altura = parseFloat(prompt("Digite sua altura."))
let peso = parseFloat(prompt("Digite seu peso."))


window.alert(`Olá ${nome}, você tem ${idade} anos, nasceu em ${2023-idade}, tem ${altura} de altura, pesa ${peso}Kg e o seu IMC é de ${(peso/(altura*altura)).toFixed(2)} Kg/m2`)
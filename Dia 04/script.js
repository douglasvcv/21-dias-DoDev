let fome = prompt("Está com fome?")
let dinheiro = prompt("Você tem dinheiro?")
let restaurante = prompt("O restaurante está aberto?")


if(fome == "não" || dinheiro == "não"){
    console.log("hoje o janta será na sua casa")
}if(fome == "sim" && dinheiro == "sim" && restaurante == "não"){
    console.log("Peça um delivery!")
}if(fome == "sim" && dinheiro == "sim" && restaurante == "sim"){
   console.log("Hoje o jantar será no seu restaurante favorito!")
}
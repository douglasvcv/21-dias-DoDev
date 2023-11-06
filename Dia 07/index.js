let condiçao = true
while(condiçao){
    let idade = Number(prompt("Quantos anos você tem?"))
    if(idade < 18){
        console.log("Você é menor de idade")
        condiçao = false
    }else{
        console.log("Você é maior de idade")
        condiçao=false
    }
}
console.log('Saiu do while')
let saldo = 1000
let vezes = 0
let maiorval = 0
let mediaval = 0
let s = 0
prompt('Digite seu nome!')
prompt('Digite seu cpf')
do {
    let valor = Number(prompt('Digite o valor desejado'))
    let saqueDepo = prompt("Digite 's' para saque e 'd' para deposito")
       if(valor < 0){
        window.alert("Digite um valor positivo")
       }
       if(saqueDepo == "s" && valor < saldo){
           saldo-=valor
           s = saldo
       }
       if(saqueDepo == "d"){
        saldo+=valor   
        s =  saldo
    }
       if(valor>maiorval){
        maiorval = valor
       }
       mediaval+=valor
       
       vezes++
       var opçao = Number(prompt("Digite '1' para continuar e '2' para parar"))
} while (opçao == 1);
    console.log(`O saldo atual é de ${s}`)
    console.log(`O maior valor inserido é de ${maiorval}`)
    console.log(`A media de valores inseridos é de ${(mediaval/vezes).toFixed(2)}`)


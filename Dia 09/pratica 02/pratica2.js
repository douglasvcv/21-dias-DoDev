do {
    
    var nome = prompt('Insira seu nome.')
    var idade = prompt('Insira sua idade.')
    var salario = Number(prompt('Insira seu salário.'))
    var i = prompt("Digite 's' para continuar e 'n' para responder novamente")
         
} while (i == "n");

let contador = 1
var percenteual = salario*1.5/100
for(let c = contador; c < 10; c++){
    percenteual*=2
}
console.log(`Seu salário de ${salario} em 10 anos vai para ${salario+percenteual}`)






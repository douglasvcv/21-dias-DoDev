numeroArray = [2, 1, 4, 3]

//irá adicionar um elemento que será posto no último lugar
numeroArray.push(2)
//irá eliminar elementos do array a partir do índice informado
numeroArray.splice(0, 1)
console.log(numeroArray)

let novoArray = []


//irá executar uma função para cada elemento do array
numeroArray.forEach(num => {
    novoArray.push(num +2)
});

console.log(novoArray)
//irá organizar os elementos em ordem do menor para o maior
console.log(numeroArray.sort())
//irá filtrar os elementos do array por uma requisição específica
numeroArray.filter(x => x > 3)
console.log(numeroArray.filter(x => x > 2))

let arrayTeste = numeroArray.filter(x => x <= 3)

console.log(arrayTeste)
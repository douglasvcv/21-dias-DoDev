let numero = Number(prompt("Insira um número"))
let array = []
array[0] = numero -1
array[1] = numero



for(let i = 2; i<10 ; i++){
    array[i] = array[i - 1] + array[i -2]
    
}


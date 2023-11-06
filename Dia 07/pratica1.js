let mediaGeral = 0
let qtdHomens = 0
let qtdMulher7 = 0
let maiorNotaHomem = 0
let contador = 1
while(contador <= 5){
    let sex = prompt('Digite o sexo do aluno ("m" ou "f")')
    let nota = Number(prompt('Digite a nota do aluno'))
if(sex == "m"){
    if(nota > maiorNotaHomem){
        maiorNotaHomem = nota
    }
    qtdHomens++
}
if(sex == "f" && nota > 7){
    qtdMulher7++
}
mediaGeral+=nota
contador++

}

console.log(`A média geral foi de ${mediaGeral/5}`)
console.log(`O número de homens que enviaram a nota foi de ${qtdHomens}`)
console.log(`O número de mulheres acima de 7 foi de ${qtdMulher7}`)
console.log(`A maior nota entre os homens foi de ${maiorNotaHomem}`)
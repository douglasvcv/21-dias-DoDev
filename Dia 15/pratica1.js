
//Criando Arrays
var arrayA = [13,20,10,22,24,20,27,17,19,14]
var arrayB = [24,22,23,11,15,17,29,14,16,21]

//Função para verificar se os arrays tem números em comum
function array(arrayUm, arrayDois){
    //Esse array vai guardar os números em comum
    var arrayGeral = []
    var index = 0
    //Estrutura de repetição que vai conferir se existe números iguais
    //O primeiro for vai passar por todo ArrayUm
    for(var i = 0; i<arrayUm.length; i++){
        //A cada número do arrayUm, ele irá conferir todos os números do arrayDois
        //O segundo For vai passar por todo ArrayDois
        for(var j = 0; j<arrayDois.length; j++){
            //O if irá conferir se o número de cada índice dos dois arrays são iguais
            //Se sim, ele irá guardar o número do arrayUm(preferência minha)
            //e irá transformar o j em arrayDois.length para o número não se repetir
            if(arrayUm[i] == arrayDois[j]){
                arrayGeral[index]=arrayUm[i]
                index++
                j = arrayDois.length
            }
        }
    }
        
    
    console.log(arrayGeral)
}
array(arrayA, arrayB)
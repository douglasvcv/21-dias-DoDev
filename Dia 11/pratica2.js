let models = []
let years = []
let values = []
let index = 0
let condition = true
while(condition == true){
    let questionModel = prompt("Insira um modelo:")
    let questionYear = Number(prompt("Insira o ano:"))
    let questionValue = Number(prompt("Insira o valor"))
        models[index]=questionModel
        years[index]=questionYear
        values[index]=questionValue
    index+=1
  let questionStop = prompt("Digite 's' para continuar inserindo.")
  if(questionStop != "s"){
    condition = false
  }

}
for(i = 0; i < models.length; i++){
    console.log(`O ${models[i]}, de ${years[i]}, tem o valor de ${values[i]}`)
}
for(let i =0; i < values.length; i++){
    for(let j = 0; j < values.length - i - 1; j++){
        
    }
}
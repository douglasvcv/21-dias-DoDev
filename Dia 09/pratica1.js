do {
    
    
    let nome = prompt("Insira seu nome")
    let idade = Number(prompt("Insira sua idade"))
    let peso = Number(prompt("Insira seu peso"))
    let altura = Number(prompt("Insira sua altura"))
    let profissao = prompt("Insira sua profissão")
    let alturadupli = altura*altura
    let imc = (peso/alturadupli).toFixed(2)
    console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}M de altura e pesa ${peso}kg.`)
    
    switch(true){
        case idade < 18:
            console.log("Sem bebida para você")
            break
            case idade >= 18:
                console.log("Está liberado para tomar umas geladas")
                break
            }
            console.log(`Sua idade em anos é ${idade}. Sua idade em meses é ${idade*12}. Sua idade em dias é ${idade*365}`)
            
            console.log(`Seu IMC é de ${imc} kg/m2`)
            
            if(imc < 18.5){
                console.log("Seu IMC aponta magreza")
            }
            if(imc < 24.9){
                console.log("Seu IMC indica normalidade")
            }
            if(imc < 30 && imc > 24.9){
                console.log("Seu IMC aponta sobrepeso")
            }
            if(imc > 30){
                console.log("Seu IMC aponta obesidade")
            }
            console.log(`Seu ano de nascimento é ${2023-idade}`)
            for(let i = 1; i<=idade; i++){
                console.log(`${2023-i} - ${idade-i} anos de idade`)
            }

            var condiçao = prompt("Deseja continuar? 's' ou 'n'")
        } while (condiçao == "s");
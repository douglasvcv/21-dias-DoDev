class Carro{
    nome
    potencia
    velocidadeMaxima
    aceleraçao
    constructor(nome, potencia, velocidadeMaxima, aceleraçao){
        this.nome=nome
        this.potencia=potencia
        this.velocidadeMaxima=velocidadeMaxima
        this.aceleraçao=aceleraçao
    }
    tempoPercorre(distancia){
        let metrosVelocidade = this.velocidadeMaxima/3.6

        let resultado = distancia/(metrosVelocidade/this.aceleraçao)
        console.log(resultado)
    }
}
let carro = new Carro("Ferrari", 400, 250, 3)
carro.tempoPercorre(200)
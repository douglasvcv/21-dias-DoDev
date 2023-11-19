class Computador{
    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.ssd = ssd
    }
    mostrar(){
        console.log(`O meu computador é do tipo ${this.tipo}, com um processador ${this.processador}, com uma placa de vídeo ${this.video}, com um armazenamento de ${this.armazenamento}, com uma memória ram de ${this.memoriaRam}`)
    }
}
let computador = new Computador("Desktop", "Ryzen 3 2200g", "Integrado", "250gb", 8, true)
computador.mostrar()
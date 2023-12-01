//classes
class Hotel{
    Nome
    IdHotel
    Categoria
    Endereço
    Telefone
    constructor(nome, id, Categoria, Endereço, Telefone){
        this.Nome = nome
        this.IdHotel = id
        this.Categoria = Categoria
        this.Endereço = Endereço
        this.Telefone = Telefone
    }
}

class Reserva{
    Id
    NomeResponsavel
    DiaEntrada
    DiaSaida
    constructor(id, nome, entrada, saida){
        this.Id = id
        this.NomeResponsavel = nome
        this.DiaEntrada = entrada
        this.DiaSaida = saida
    }

}

let hoteis = []
let reservas = []
let idHotel = 1
let idReserva = 1

function cadastrarHotel(){

        let perguntaNome = prompt("Insira o nome do hotel")
        
        let perguntaCategoria = prompt("Insira a categoria")
        let perguntaEndereço = prompt("Insira o endereço")
        let perguntaTelefone = prompt("Insira o telefone")
        let hotel = new Hotel(perguntaNome, idHotel, perguntaCategoria, perguntaEndereço, perguntaTelefone)
        idHotel++
       hoteis.push(hotel)
}

function cadastrarReserva(){
    existe = false
    do {
        let pergunta = prompt("Insira o id do hotel")
        for(let i = 0 ; i<= hoteis.length; i++){
            if(pergunta == idHotel){
                i = hoteis.length
                existe = true
            }else{
                console.log("Insira um id verdadeiro")
            }
        }
    } while (existe = false);


        let perguntaNome = prompt("Insira o nome do hotel")
        
        let perguntaEntrada = prompt("Insira o dia de entrada")
       do {
        
           let perguntaSaida = prompt("Insira o dia de saída")
           if(perguntaEntrada>perguntaSaida){
               console.log("O dia da entrada não pode ser maior que o dia da saída")
            }
        } while (perguntaEntrada > perguntaSaida);
        let reserva = new Reserva(perguntaId, perguntaNome, perguntaEntrada, perguntaSaida)
       reservas.push(reserva)
       
  
    }

function idHotel(id){
    if(id == hoteis[0].Id){
        return reservas
    }
    
}
function idReserva(id){
    if(id == reservas[0].Id){
        return hoteis
    }
}

class Livro{
    Titulo
    Autor
    Editora
    Ano
    Diponibilidade
    
    constructor(Titulo, Autor, Editora, Ano){
        this.Titulo = Titulo
        this.Autor = Autor
        this.Editora = Editora
        this.Ano = Ano
        this.Diponibilidade = true
    }
    
    
    
}

class Biblioteca{
    Nome
    Endereço
    Telefone
    AcervoLivros
    
    constructor(Nome, Endereço, Telefone){
        this.Nome = Nome
        this.Endereço = Endereço
        this.Telefone = Telefone
        this.AcervoLivros = []
    }
    
    buscar(Nome){
        Nome = prompt("Digite o nome de algum livro")
       for(let i = 0; i < livros.length; i++){
        if(Nome == livros[i].Titulo){
            i = livros.length
            console.log(livros[i])
        }
       }
    }
    emprestimo(Titulo){
        Titulo = prompt("Insira o nome do livro!")
        for(let i = 0; i < livros.length; i++){
            if(Titulo == livros[i].Titulo){
                i = livros.length
                if(livros[i].Diponibilidade == true){
                    console.log(livros[i].Diponibilidade)
                    livros[i].Diponibilidade = false
                }if(livros[i].Diponibilidade == false){
                    console.log(false)
                }
            }
           }
    }
}

let livros = []
let livro1 = new Livro("Pequeno príncipe", "Machado de assis", "Verde", 2004)
let livro2 = new Livro("1984", "George orwell", "Principis", 1949)


livros.push(livro1, livro2)




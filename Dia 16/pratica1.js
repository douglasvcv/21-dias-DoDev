let usuario = []
let senhas = []

function chamarAcao(opcao){
    var opcao = prompt("Digite 1 para cadastrar, 2 para logar, 3 para excluir conta e 4 para encerrar o programa")


}

function cadastro(){
    usuario.push(prompt("Cadastre seu usuário"))
     senhas.push(prompt("Cadastre sua senha"))
}

function login(nome, senha){
    let indice = usuario.indexOf(nome)
    if(indice != -1 &&  senhas[indice] == senha){
        return true
    }else{
        return false
    }
}

function excluirLogin(nome){
    let indice = usuario.indexOf(nome)
    if(indice != -1){
        usuario.splice(indice, 1)
        senhas.splice(indice, 1)
        console.log("Conta excluída com sucesso!")
    }else{
        console.log("Usuário não encontrado!")
    }
}
let condiçao = true

while(condiçao){
    let opcao = chamarAcao()
    switch(opcao){
        case "1":
            cadastro()
            break
        case "2":
            let nome = prompt("Insira seu login")
            let password = prompt("Insira sua senha")
            let fazerLogin = login(nome, password)
            if(fazerLogin){
                console.log("Login feito com sucesso!")
            }else{
                console.log("Confira os dados!")
            }
           break
        case "3":
            let name = prompt("Digite o nome") 
            excluirLogin(name)
            break
        case "4":
            condiçao = false
            break
        default:
            console.log("Opção invalida!")
            break
        }

}
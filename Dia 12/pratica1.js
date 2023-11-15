let nomes = []
let senhas = []
let condition = true
let counter = 0
while(condition == true){
    var choice = prompt("Digite (c) para cadastrar, (l) para logar, (e) para excluir e (ee) para encerrar o programa.")
    
    if(choice == "l"){
        var login = prompt("Digite o nome de usuário.")
        var login2 = Number(prompt("Digite a senha."))
        if(login = nomes && login2 == senhas){
            console.log("sucesso!")
        }else{
            console.log("Confira os dados e tente novamente!")
        }

    }
    if(choice=="c"){
        var register = prompt("Cadastre o nome de usuário")
        var register2 = Number(prompt("Cadastre a senha"))
        nomes[counter]=register
        senhas[counter]=register2
        counter++
    }
    if(choice == "e"){
        var exit = prompt("Digite o usuário para exclui-lo")
        var exit2 = Number(prompt("Digite a senha para a exclusão"))
        if(exit==nomes && exit2==senhas){
            console.log(`A conta com nome ${exit} e senha ${exit2} foi excluída`)
            nomes-=[exit]
            senhas-=[exit2]
        }
    }
    if(choice == "ee"){
        condition = false
    }
}
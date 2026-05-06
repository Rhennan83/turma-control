	const tela = require("readline-sync")
const { telaCadastro, telaListaAlunos } = require("./src/cadastro-de-aluno")

function main() {
    let loop = true

   console.log("******************** MENU PRINCIPAL **********************************")
    while(loop) {	
	    console.log("1 - Cadastrar aluno\n2 - Adicionar Notas\n3 - Listar\n0 - Sair")
        const opcao:string = tela.question("Deseja continuar? ")

        switch(opcao) {
            case "0":
                loop = false
                break
            case "1":
                telaCadastro()
                break
            case "2":
                break
            case "3":
                telaListaAlunos()
                break
            default:
                console.log("Opção invalida!")
                break
        }
    }

    console.log("********************************************************")
}

main()

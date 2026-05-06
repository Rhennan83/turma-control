const tela = require("readline-sync")

function main() {
  let loop = true

  while(loop) {
    console.log("1 - Cadastrar aluno\n2 - Adicionar Notas\n3 - Listar\n0 - Sair")
   const opcao:string = tela.question("Deseja continuar? ")

    switch(opcao) {
      case "0":
        loop = false
      break
      case "1":

      break
      case "2":
      break
      default
        console.log("Opção invalida!")  
      break
    }      
  }
}

main()

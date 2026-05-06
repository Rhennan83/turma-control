const tela = require("readline-sync")
const cadastro = require("./src/cadastro_aluno.ts")

// função inicial para chamar as telas
function main() {

  let loop = true //inicializa o loop  

  console.log("******************* MENU PRINCIPAL ***************************")
  while(loop) { // roda até quando o usuário não digitar '0'
    console.log("1 - Cadastrar aluno\n2 - Adicionar Notas\n3 - Listar\n0 - Sair")
   const opcao:string = tela.question("Deseja continuar? ")

    switch(opcao) {
      case "0":
        loop = false //para parar o loop
      break
      case "1":
        cadastro.telaCadastro()
      break
      case "2":
      break
      case "3":
        cadastro.telaListaAlunos()
      break
      default: // caso não coloque a opção valida cai aqui 
        console.log("Opção invalida!")
      break
    } 
  }
}

// inicializar o sistema
main()

const tela = require("readline-sync")

// criar uma lista de string para guardas os alunos
let alunos:string[] = []

// responsavel para gerar tela de cadastros
function telaCadastro() {
  console.log("*************** CADASTRAR ALUNOS ***************************")
  const nomeAluno:string = tela.question("Nome do aluno: ")
  const dataNascimento:string = tela.question("Data Nascimento: ")
  const contato:string = tela.question("Número do celular: ")
  
  const aluno = `${nomeAluno};${dataNascimento};${contato}`
  alunos.push(aluno)
  console.log("************************************************************")
}

// responsavel em carregas os alunos cadastrados
function telaListaAlunos() {
  console.log("************** LISTA ALUNOS  ************************")
  for(let i = 0; i < alunos.length; i++) {
    console.log(`${i + 1}. ${alunos[i]}`)
  }
  console.log("*****************************************************")
}

// responsavel de deixar a função publica
export = { telaCadastro, telaListaAlunos }

const tela = require("readline-sync")

let alunos:string[] = []

function telaCadastro() {
    const nomeAluno:string = tela.question("Nome do aluno: ")
    const dataNascimento:string = tela.question("Data Nascimento:")
    const contato:string = tela.question("Número do celular: ")

    const aluno = `${nomeAluno};${dataNascimento};${contato}`
    alunos.push(aluno)
}

// responsavel em carregar os alunos cadastrados
function telaListaAlunos() {
    for(let i = 0; i <= alunos.length; i++) {
        console.log(`${i + 1}. ${alunos[i]}`)
    }
}

// responsavel de deixar a função publica
module.exports = { telaCadastro, telaListaAlunos }

const tela = require("readline-sync")
const { titulo } = require("./utils.ts")

let notas:string[] = []

function telaCadastrarNotas() {

  titulo("CADASTRO DE NOTAS")

  const n1 = tela.question("Informe a primeira nota: ")
  const n2 = tela.question("Informe a segunda nota: ")
  const n3 = tela.question("Informe a terceira nota: ")

  notas.push(`${n1};${n2},${n3}`)
  
}

export = { telaCadastrarNotas }

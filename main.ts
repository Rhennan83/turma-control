import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function menu(): void {
  console.log('\n=== TURMA CONTROL ===')
  console.log('1 - Cadastrar aluno')
  console.log('2 - Adicionar notas')
  console.log('0 - Sair')
  console.log('=====================')

  rl.question('Escolha uma opção: ', (opcao) => {
    let loop = true

    switch (Number(opcao)) {
      case 1:
        console.log('>> Cadastrar aluno (em desenvolvimento)')
        break
      case 2:
        console.log('>> Adicionar notas (em desenvolvimento)')
        break
      case 0:
        loop = false
        console.log('Encerrando o sistema...')
        rl.close()
        return
      default:
        console.log('Opção inválida!')
    }

    if (loop) menu()
  })
}

menu()

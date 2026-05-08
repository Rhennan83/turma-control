// Limpa a tela mantendo as informações no topo
function limparTela(){
  console.clear()
}

// funcão responsável por popular o sinal na tela
function linha(simbolo:string = "=") {
  console.log(simbolo.repeat(process.stdout.columns))
}

// constroi um cabeçalho da janela atual 
function titulo(texto:string) {
  const largura = process.stdout.columns

  // padStart popula no inicio da linha
  // padEnd popula no final da linha
  const textoCentralizado = texto.padStart(
    (largura + texto.length)/2
  ).padEnd(largura)


  limparTela()
  linha()
  console.log(textoCentralizado.toUpperCase())
  linha()
}

export = { 
  limparTela, 
  linha,
  titulo
}

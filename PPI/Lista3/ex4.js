/* 4. Escreva uma função chamada obterDescricao que receba um objeto livro
 e retorne uma string com uma descrição do livro (ex.: "Dom Casmurro, autor: Machado de Assis, 256 páginas").
 Teste a função passando como parâmetros ao menos dois objetos diferentes.
 */

let livro = {
  nome: "Dom Casmurro",
  autor: "Machado de Assis",
  paginas: 256
}

let livro2 = {
  nome: "Ponto de Inflexão",
  autor: "Fávio Augusto da Silva",
  paginas: 200
}

function obterDescricao(livro) {
  return `${livro.nome}, autor: ${livro.autor}, número de páginas: ${livro.paginas}`
}

//console.log(livro)
console.log(obterDescricao(livro))

console.log(obterDescricao(livro2))
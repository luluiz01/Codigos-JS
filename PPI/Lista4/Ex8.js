/* 8. Escreva uma função inverte que retorna o inverso de uma string dada.
Utilize métodos de string e array, sem nenhuma estrutura de loop.

Ex.: O resultado de inverte('Abacaxi') deve ser ixacabA. */



function inverte(palavra) {
  let a = palavra.split('')
  a.reverse()

  let b = a.join('')
  return b
}

console.log(inverte('Abacaxi'))
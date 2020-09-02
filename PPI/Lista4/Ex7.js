/* 7. Escreva uma função ehPalindromo que receba uma string e retorne um valor booleano
 (true ou false), dependendo se a string é ou não idêntica quando lida de trás para frente.

 */

let palavra = ('osso')

function ehPalindromo(palavra) {


  let a = palavra.split('')// split tranforma string em array
  a.reverse()//  reverse troca a ordem das letras

  let b = a.join('')// join junta

  if (palavra == b) {
    return true
  } else {
    return false
  }
}
console.log(ehPalindromo(palavra))
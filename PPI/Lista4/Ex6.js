/* 6. Escreva uma função somaArrays, a qual receba dois arrays de mesmo tamanho (qualquer) e retorne um array, 
também de mesmo tamanho, em que cada elemento é a soma dos valores correspondentes das entradas.

Por exemplo, se:

let a = [ 4, 5, 10 ];
let b = [ 2, 3, 8 ];
A chamada de somaArrays(a,b) deve retornar o array [ 6, 8, 18 ]. */

let a = [4, 5, 10];
let b = [2, 3, 8];

function somarArrays() {
  for (i in a) {
    a[i] += b[i]
  }
  return console.log(`${a} `);
}
somarArrays(a, b)
/* 11. Escreva uma função somaMatrizes que receba dois arrays bidimensionais de mesmo tamanho contendo
       números e retorne outro array bidimensional contendo a soma dos anteriores.
Por exemplo, se:

let a = [ [4,5,6], [10,20,30] ];
let b = [ [1,2,3], [5,8,20] ];
A chamada de somaMatrizes(a,b) deve retornar [ [ 5, 7, 9 ], [ 15, 28, 50 ] ]. */

let a = [[4, 5, 6], [10, 20, 30]];
let b = [[1, 2, 3], [5, 8, 20]];

function somaMatrizes(a, b) {
  for (i in b) {
    for (j in b[i]) {
      a[i][j] += b[i][j];
    }
  }
  return a;
}
console.log(somaMatrizes(a, b));
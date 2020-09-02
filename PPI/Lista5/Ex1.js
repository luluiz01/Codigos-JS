/* 1. Dada a função:

function fazAlgo(oque, x){
    return oque(x);
}
Complete o código de modo que a saída de:

for(let n of [2,3,4,5]){
    console.log( `${n}: ${fazAlgo(dobra, n)}, ${fazAlgo(quadrado, n)}` );
}
Seja a seguinte:

2: 4, 4
3: 6, 9
4: 8, 16
5: 10, 25 */

let dobra = a => a + a;
let quadrado = b => b * b;

function fazAlgo(oque, x) {
  return oque(x);
}

for (let n of [2, 3, 4, 5]) {
  console.log(`${n}: ${fazAlgo(dobra, n)}, ${fazAlgo(quadrado, n)}`);
}

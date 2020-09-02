/* function ola() {
  return "ola mundo";
}

let x = ola;//Jeito de quardar uma função em uma variavel é chamar sem os parenteses

console.log(x)
 */
/* let soma = (a, b) => a + b;

function operacao(op, x, y) {
  return op(x, y)
}

let v1 = operacao(soma, 10, 5);
let v2 = operacao((a, b) => a * b, 10, 5);


console.log(v1)
console.log(v2) */

/* let a = () => { console.log('A!') }

let b = [
  () => { console.log('B zero') },
  () => { console.log('B um') }
]

a();
b[0]();// chamada de funcao sempre envolve parenteses

let c = () => {
  return () => { console.log("C") }
}

c()()

let b = {
  primeiro: () => { console.log('D1') },
  segundo: () => { console.log('D2') },
}

b.primeiro();
b.segundo(); */


/* let numeros = [2, 18, 15, 5, 20]
let soma = 0


numeros.forEach(x => { soma += x })
let pares = numeros.filter(x => x % 2 == 0)// filter recebe um unico parametro, no caso uma fancao
let resultado = numeros.map(x => x / 2)// map recebe um unico parametro, no caso uma fancao
let somaReduce = numeros.reduce((acumulador, indiceArray) => acumulador + indiceArray)
numeros.sort((a, b) => a - b)

console.log("forEach: " + soma)
console.log("Filter: " + pares)
console.log("Map: " + resultado)
console.log("Reduce: " + somaReduce)
console.log("Sort: " + numeros) */

function fazfuncao() {
  let texto = 'Olá, mundo!'
  return () => texto
}

let func = fazfuncao()
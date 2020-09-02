/* let a = [10, 20, 30]
a[3] = 'abc'
a.push(5050) //adicionar na ultima posição



console.log(a)
console.log(a.length) */
/*
let frutas = ['Banana', 'Laranja', 'Maça', 'Manga']

frutas.splice(2, 0, 'Limão')
console.log(frutas)

let [a, b, c, d] = frutas
console.log(a, b, c, d) */

/* for (let i = 0; i <= frutas.length; i++) {
  console.log(i, 'O valor atual é: ', frutas[i])
} */

/* for (let i in frutas) {
  console.log(i, ' o valor atual é: ' + frutas[i])// for in itera o indice(numero)
} */
/*
for (let f of frutas) {
  console.log(' O valor atual é: ' + f)//for of itera o que está no indice(banana)
} */
/*
function lista() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(`Índice ${i}, valor: ${arguments[i]}`)

  }
}

lista('Batata', 123, true, 'luiz') */

/* function lista(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(`Índice ${i}, valor: ${args[i]}`)

  }
}

lista('Batata', 123, true, 'luiz')  */

/* let s = 'IFB';
let x = s.split('')//metodi split transforma uma string em um array

x.push('lalala')
console.log(x) */

/* let s = 'IFB';
let x = s.split('')//metodi split transforma uma string em um array

let s2 = 'Instituto Federal de Brasília'
let y = s2.split(' ')

console.log(y) */
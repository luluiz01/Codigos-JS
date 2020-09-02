/* 
6. Replique a mesma saída do exercício 3 usando map no lugar da função fazEmTodos.
 */

dobra = a => a + a
quadrado = a => a * a

let lista = [2, 3, 4, 5];
let a = lista.map(x => dobra(x))
let b = lista.map(x => quadrado(x))

console.log(a)
console.log(b)


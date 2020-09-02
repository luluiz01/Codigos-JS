/* 3. Ainda aproveitando dobra e quadrado, escreva a função fazEmTodos(oque, array), de modo que a saída de:

let lista = [2,3,4,5];
console.log( fazEmTodos(dobra, lista) );
console.log( fazEmTodos(quadrado, lista) );
Seja a seguinte:

[ 4, 6, 8, 10 ]
[ 4, 9, 16, 25 ] */




fazEmTodos = (oque, array) => {
  b = []
  for (let i in array) {
    b[i] = oque(array[i])
  }
  return b
}

dobra = a => a + a
quadrado = a => a * a

let lista = [2, 3, 4, 5];

console.log(fazEmTodos(dobra, lista));
console.log(fazEmTodos(quadrado, lista));


/* 2. Escreva um script que resulte na saída abaixo, construída a partir do array da questão anterior,
 usando a estrutura for(... ; ... ; ...). Depois refaça o mesmo loop de mais duas maneiras,
 usando for ... in e for ... of.
- ciano
- verde
- amarelo */

let cores = ['ciano', 'verde', 'amarelo'];

for (let i = 0; i < cores.length; i++) {
  console.log(cores[i])
}

for (i in cores) {
  console.log(cores[i])
}

for (i of cores) {
  console.log(i)
}
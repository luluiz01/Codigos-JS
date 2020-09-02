/* 9. Escreva uma função que receba um array bidimensional e escreva-o na tela como uma
tabela com linhas e colunas separadas por tabulação ("\t").

Por exemplo, para o array do slide 19, o resultado deve ser:

Fred    Barney
George  Jane    Elroy
Homer   Marge   Bart */

let familia = [
  ['Fred', 'Barney'],
  ['George', 'Jane', 'Elroy'],
  ['Homer', 'Marge', 'Bart']
]

for (let a in familia) {
  console.log('\t')
  for (let b in familia[a]) {
    process.stdout.write(familia[a][b] + " ")
  }
}
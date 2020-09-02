/* 2. Aproveitando os mesmos objetos dobra e quadrado da questão anterior, crie um array de operações que começa assim:

let operacoes = [ dobra, quadrado, ... ]
Preencha os itens restantes do array com duas funções anônimas, uma que retorne a metade, e a outra, o negativo do valor passado. Percorra esse array com um loop for chamando todas as funções com um mesmo parâmetro e escrevendo o resultado na tela. Por exemplo, para o parâmetro 8, a saída deve ser:

16
64
4
-8 */

let operacoes = [
  dobra = a => a + a,
  quadrado = a => a * a,
  metade = a => a / 2,
  negativo = a => a * (-1)
]
for (let i in operacoes) {
  console.log(operacoes[i](8))
}
/* b[0]();  */
/*
console.log(operacoes[0](8))
console.log(operacoes[1](8))
console.log(operacoes[2](8))
console.log(operacoes[3](8)) */
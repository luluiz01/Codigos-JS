/* Escreva 3 funções: deposita(conta, valor), que acrescenta o valor especificado a uma conta;
 retira(conta, valor), que subtrai o valor especificado; e transfere(conta1, conta2, valor)
 que transfere dinheiro de uma conta a outra. Escreva código para testar as 3 funções usando os objetos acima. */

let contaX = {
  nome: 'José Fontes',
  saldo: 1000
};

let contaY = {
  nome: 'Felipe Silva',
  saldo: 3000
}

function depositar(conta, valor) {
  let total = conta.saldo + valor
  return `Depósito no valor de ${valor} reais efetuado com sucesso! Saldo atual ${total}`
}


function retirar(conta, valor) {
  let total = conta.saldo - valor
  return `Saque no valor de ${valor} reais efetuado com sucesso! Saldo atual ${total}`
}


function transferir(conta1, conta2, valor) {
  let remetente = conta1.saldo - valor
  let destinatario = conta2.saldo + valor
  conta1.saldo = remetente
  conta2.saldo = destinatario

  return `Transferencia de ${conta1.nome} para ${conta2.nome} no valor de ${valor} efetuada com sucesso!`
}

//teste 1
/* console.log(contaX)
console.log(depositar(contaX, 500))
 */

//teste 2
/* console.log(contaY)
console.log(retirar(contaY, 600)) */

/* //teste 3
console.log(contaX)
console.log(contaY)
console.log(transferir(contaX, contaY, 100))
console.log(contaX)
console.log(contaY)
 */

//teste 4
console.log(contaX)
console.log(contaY)
console.log(transferir(contaY, contaX, 600))
console.log(contaX)
console.log(contaY)

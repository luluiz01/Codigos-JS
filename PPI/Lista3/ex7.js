/* 7. Partindo do código anterior, transforme as três funções em métodos de um dos objetos.
De modo que o seguinte código:

contaX.deposita(800);
console.log(contaX.nome, contaX.saldo);

contaX.retira(500);
console.log(contaX.nome, contaX.saldo);

contaX.transferePara(contaY, 1000);
console.log(contaX.nome, contaX.saldo);
console.log(contaY.nome, contaY.saldo);
Resulte em:

José Fontes 1800
José Fontes 1300
José Fontes 300
Felipe Silva 4000 */

let contaX = {
  nome: 'José Fontes',
  saldo: 1000,
  depositar: function (conta, valor) {
    let total = conta.saldo + valor
    return `Depósito no valor de ${valor} reais efetuado com sucesso! Saldo atual ${total}`
  },
  retirar: function (conta, valor) {
    let total = conta.saldo - valor
    return `Saque no valor de ${this.valor} reais efetuado com sucesso! Saldo atual ${this.total}`
  }
};

let contaY = {
  nome: 'Felipe Silva',
  saldo: 3000,
  depositar: function (conta, valor) {
    let total = conta.saldo + valor
    return `Depósito no valor de ${this.valor} reais efetuado com sucesso! Saldo atual ${this.total}`
  },
  retirar: function (conta, valor) {
    let total = conta.saldo - valor
    return `Saque no valor de ${this.valor} reais efetuado com sucesso! Saldo atual ${this.total}`
  }
}



function transferePara(conta1, conta2, valor) {
  let remetente = conta1.saldo - valor
  let destinatario = conta2.saldo + valor
  conta1.saldo = remetente
  conta2.saldo = destinatario

  return `Transferencia de ${conta1.nome} para ${conta2.nome} no valor de ${valor} efetuada com sucesso!`
}

contaX.depositar(800);
console.log(contaX.nome, contaX.saldo);

contaX.retirar(500);
console.log(contaX.nome, contaX.saldo);

contaX.transferePara(contaY, 1000);
console.log(contaX.nome, contaX.saldo);
console.log(contaY.nome, contaY.saldo);
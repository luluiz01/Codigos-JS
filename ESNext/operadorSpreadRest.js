// operador ... rest (juntar) / spread(espalhar)
// usar rest com parametros de funcção

//usar o spread com objeto
const funcionario = { nome: 'Rafaela', salario: 123.55 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

//usar spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoB = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoB)
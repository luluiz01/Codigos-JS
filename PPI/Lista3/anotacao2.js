let item = {
  nome: 'Computador',
  preco: 1500
}

function mudarPreco(obj) {
  obj.preco = 2000 //funcao de mudar preco, muda quando
}

console.log(item)
mudarPreco(item)// chamando funcao com o parametro do objeto item que atualiza o valor pra 2000

console.log(item)

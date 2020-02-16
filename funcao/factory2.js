// funcao factory retorna um  objeto

function criarProduto(nome, valor){
    return {
        nome: nome, 
        valor: valor
    }
}
console.log(criarProduto('pepino', 1.99))

console.log(criarProduto('laranja', 2.99))
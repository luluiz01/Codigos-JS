// Armazenamento de uma funcao em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenamento de uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 8))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))
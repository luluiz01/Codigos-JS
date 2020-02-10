function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 15, 5, 4, 8)
imprimirSoma()


//funcao com retorno
function soma(a, b = 0) {
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))

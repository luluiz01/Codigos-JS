/*
6. Escreva uma função para calcular a área de um círculo, dado o raio. Se o raio for negativo, deve ser retornado o valor 0.
Dica: Use Math.PI para obter o valor de π.
A = π . r2
 */
calcularArea = (raio) => {
    let area = Math.PI * (raio ** 2)
    console.log(`A área é: ${area.toFixed(2)}`)

}
calcularArea(5)


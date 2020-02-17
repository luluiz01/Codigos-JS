function classificarTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado1 == lado3) {
        return 'Equilátero'

    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'isóceles'
    } else {
        return 'Escaleno'
    }
}

console.log(classificarTriangulo(3, 3, 3))
console.log(classificarTriangulo(2, 3, 2))
console.log(classificarTriangulo(3, 4, 5))
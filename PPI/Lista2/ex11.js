/**
 * 11. Escreva a função calc(op,a,b) em que o primeiro parâmetro define a operação a ser feita (0 → adição, 1 → subtração, 2 → multiplicação, 3 → divisão)
 *  e a e b são os operandos. Na implementação, defina uma função interna sem parâmetros para realizar cada operação (adiciona(), etc.).

Ex.: calc(2, 15,10) deve retornar 150.
 */
calc = (op, a, b) => {

    adiciona = () => {
        if (op == 0) {
            let soma = a + b
            console.log(`A soma é: ${soma}`)
        } if (op == 1) {
            let subtracao = a - b
            console.log(`A subtracao é: ${subtracao}`)
        } if (op == 2) {
            let multiplicacao = a * b
            console.log(`A multiplicacao é: ${multiplicacao}`)
        } if (op == 3) {
            let divisao = a / b
            console.log(`A divisao é: ${divisao}`)
        }

    }
    adiciona()

}
calc(2, 15, 10)
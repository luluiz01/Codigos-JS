/**7. Escreva uma função chamada ehPrimo que receba um número e retorne se esse número é primo ou não.
 * Utilize a chamada dessa função em um loop para listar todos os números primos entre 2 e 30. */
function ehPrimo(numero) {
    divisores = 0
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            divisores++
        }

    }
    if (divisores == 2) {
        console.log(`${numero} é primo`)
    } else {
        console.log(`${numero} não é primo`)
    }

}
for (let i = 2; i <= 30; i++) {
    ehPrimo(i)
}
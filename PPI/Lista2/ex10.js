/**10. Escreva a função recursiva numprint(n), que, ao ser chamada, escreva todos os números entre n e 50. 
 * A função não deve conter nenhuma estrutura de loop.

 */

numprint = (n) => {
    if (n == 50) {
        console.log(n)
        return n

    } else if (n >= 50) {
        console.log(n)
        return n * numprint(n - 1)
    } else {
        console.log(n)
        return n * numprint(n + 1)
    }
}


numprint(45)
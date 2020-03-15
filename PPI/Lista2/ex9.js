/**
 * 9. Escreva uma função chamada potencia, com um parâmetro obrigatório, n, e outro opcional, x. 
 *    Caso x não seja especificado na chamada, a função deve retornar n^2; caso seja, deve retornar n^x.

Por exemplo, o código:

console.log( potencia(2) );
console.log( potencia(3) );
console.log( potencia(3,4) );
console.log( potencia(2,10) );
Deve resultar em:

4
9
81
1024

 */
potencia = (n, x = '') => {
    if (x == '') {
        let potencia = n ** 2
        console.log(potencia)
    } else {
        let potencia = n ** x
        console.log(potencia)
    }
}
potencia(2)
potencia(3)
potencia(3, 4)
potencia(2, 10)
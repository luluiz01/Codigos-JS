/*5. Escreva uma função que receba uma temperatura em Fahrenheit e retorne o valor em Celsius. 
Modifique a questão 9 da lista anterior para chamar essa função dentro do loop ao construir a tabela. */

function fahrenheit(f) {
    for (let f = -50; f <= 50; f = f + 5) {
        console.log(`${f} fahrenheit = ${parseFloat(5 / 9 * (f - 32)).toFixed(2)} Ceucius`)
    }
}
fahrenheit(50)
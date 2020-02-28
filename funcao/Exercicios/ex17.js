/*Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function calcularAumento(plano, salario) {
    switch (plano) {
        case 'a':
        case 'A':
            return salario * 1.1
        case 'b':
        case 'B':
            return salario * 1.5
        case 'c':
        case 'C':
            return salario * 1.3

    }

}
console.log(calcularAumento('a', 1000))
console.log(calcularAumento('b', 1000))
console.log(calcularAumento('c', 1000))
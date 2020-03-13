/**9. Escreva um script que gere uma tabela de temperaturas, em que a primeira coluna mostre temperaturas em Fahrenheit, 
 * e a segunda, as equivalentes em Celsius. Devem ser exibidas todas as temperaturas Fahrenheit entre -50F e 50F, com incrementos de 5F. */
for (let f = -50; f <= 50; f = f + 5) {
    console.log(`${f}f = ${5 / 9 * (f - 32)}cº`)

}
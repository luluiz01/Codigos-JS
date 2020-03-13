/*5. Modifique a questão anterior para ler a temperatura em Fahrenheit a partir de um parâmetro da linha de comando.*/
let f = process.argv[2];
console.log(`c = ${5 / 9 * (f - 32)}`)
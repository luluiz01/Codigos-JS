/*
4. Modifique a resposta anterior para que a chamada de função receba parâmetros passados na linha de comando.
 */

let n1 = parseInt(process.argv[2])
let n2 = parseInt(process.argv[3])
let n3 = parseInt(process.argv[4])
function media3(n1, n2, n2) {

    let media = (n1 + n2 + n3) / 3
    console.log(`A média é: ${media}`)

}
media3(n1, n2, n3)

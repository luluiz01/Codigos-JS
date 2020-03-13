/**6. Escreva um script que leia 3 valores como parâmetros da linha de comando e escreva na tela o maior deles. */
let a = process.argv[2];
let b = process.argv[3];
let c = process.argv[4];

if (a > b && a > c) {
    console.log(a)
} else if (b > c && b > a) {
    console.log(b)
} else {
    console.log(c)
}
/*
1. Escreva uma função simples que apenas escreve uma frase na tela. Coloque a chamada dessa função dentro de uma estrutura de loop que execute 3 vezes.
 */
escreverFrase = (frase) => {
    console.log(frase)
}

for (i = 0; i <= 2; i++) {
    escreverFrase('Javascript é legal')
}
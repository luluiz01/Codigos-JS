/*
2. Modifique a função da questão anterior para que a função aceite um argumento e concatene o valor desse argumento à frase escrita na saída. 
Na chamada, passe o valor da variável de loop como argumento.
 */
function escreverFrase(frase, complemento = 'é legal') {
    console.log(frase, complemento)
}

for (i = 0; i <= 2; i++) {
    escreverFrase('Javascript')
}
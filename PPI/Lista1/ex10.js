/**10. Escreva um script que gere o seguinte padrão na tela, escrevendo apenas um caractere '*' por instrução e utilizando dois loops for, um dentro do outro:

*
**
***
****
*****

(Use process.stdout.write(...) ao invés de console.log(...), para evitar a quebra de linha após cada caractere). */
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write('*')
    }
    console.log('')
}
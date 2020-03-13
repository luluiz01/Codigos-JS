/**8. Escreva uma função chamada saudacao com um argumento obrigatório, nome, e um opcional, frase. 
 * A função deve escrever uma saudação na tela, contendo o nome e a frase especificadas. Se a frase não for especificada, o valor padrão é "Olá". 

 saudacao('Fulano');
saudacao('Sicrano', 'Bom dia');
saudacao('Beltrano', 'Boa noite');
Deve retornar algo parecido com:

Olá, Fulano!
Bom dia, Sicrano!
Boa noite, Beltrano!
*/
function saudacao(nome, frase = 'Olá') {
    console.log(`${nome}, ${frase}`)

}
saudacao('Oi')
saudacao('Oi','Bem vindo')
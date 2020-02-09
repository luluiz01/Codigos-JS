const escola = "Cod3r"
console.log(escola.charAt(4))//Localiza a posição
console.log(escola.charAt(5))//Encontra vazio 
console.log(escola.charCodeAt(3))//Posição da Tabela ASK
console.log(escola.indexOf('o'))//Mostra a posição do índice

console.log(escola.substring(1))//Mostra a posição a partir do índice escolhido
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola '+ escola + "!")
console.log(escola.replace(3, 'e')) // substitui 

console.log('Ana,Maria,Pedro'.split(','))// fatia e faz um array
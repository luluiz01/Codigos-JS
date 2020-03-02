const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // elimina o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento!
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no primeiro índice
console.log(pilotos)

// splice pode adiconar e remover elementos

//Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)// retura o massa
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)// novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)
console.log('Os verdadeiros são..')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))


console.log('Os Falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


console.log('Pra finalizar...')
console.log(!!('' || 0 || ''))
let nome = "Luiz"
console.log(nome || 'Desconhecido')


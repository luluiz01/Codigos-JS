for (let letra of 'Coder') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assustosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assustosMap) {
    console.log(assunto)
}

for (let chave of assustosMap.keys()) {
    console.log(chave)
}

for (let valor of assustosMap.values()) {
    console.log(valor)
}

for (let [chave, valor] of assustosMap.entries()) {
    console.log(chave, valor)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}
function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

// console.log(0.1 + 0.2)
formatarValorDecimal(0.1 + 0.2)
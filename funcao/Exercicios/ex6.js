/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/
function caucularJurosSimples(capitalInicial, taxaDejuros, tempo) {
    juros = capitalInicial + capitalInicial * taxaDejuros * tempo
    return juros
}

function caucularJurosComposto(capitalInicial, taxaDejuros, tempo) {
    montante = capitalInicial * (1 + taxaDejuros) ** tempo
    return montante
}

console.log(caucularJurosSimples(100, 10 / 100, 2))
console.log(caucularJurosComposto(100, 10 / 100, 2))
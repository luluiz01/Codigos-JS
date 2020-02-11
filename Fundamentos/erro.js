function tratarErroElencar(erro) {
    // throw new Error('....')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}
function imprimirNomeGritado(obg) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroElencar(e)
    } finally {
        console.log('Final')
    }
}
const obj = { nome: 'Luiz' }
imprimirNomeGritado(obj)
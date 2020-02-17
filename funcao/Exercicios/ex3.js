function exponenciar(base, expoente) {
    //Método antigo: 
    let resultado = Math.pow(base, expoente)

    // método novo
    resultado = base ** expoente
    return resultado

}

console.log(exponenciar(2, 3))
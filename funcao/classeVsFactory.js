class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }
    falar() {
        console.log(`Meu nome é: ${this.nome} ${this.sobrenome}`)
    }
    envelhecer() {
        this.idade++
        console.log(`Minha idade é: ${this.idade}`)

    }
}

const p1 = new Pessoa('Luiz', 'Henrique', 23)
p1.falar()

p1.envelhecer()

const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é: ${nome}`)
    }
}

const p2 = criarPessoa('Diego')
p2.falar()
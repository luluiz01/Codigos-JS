/* let dino = {
  nome: 'Tyrannoraurus rex',
  periodo: 'Cretáceo',
  peso: 14000,

  info: function () {
    return `${this.nome} viveu no período ${this.periodo} e pesava ${this.peso}kg`
  }
}

console.log(dino.info()) */

/*
///prototipos
let prot = {
  nome: 'Novo usuário',
  pais: 'br',
  tipo: 'comum'
}

let user1 = Object.create(prot);
user1.nome = 'cebolinha'
//console.log(user1.nome)

let user2 = Object.create(prot);
user2.nome = 'Donald Duck';
user2.pais = 'USA';

console.log(user2) */

let quadrado = {
  altura: 5,
  get largura() {
    return this.altura
  },
  get area() {
    return this.altura ** 2
  },
  set area(a) {
    //metodo set precisa de parametro
    this.altura = Math.sqrt(a)
  }
}

quadrado.altura = 8
console.log(quadrado.altura, quadrado.largura)
console.log(quadrado.area)


quadrado.area = 100 //esse valor é o 'a' do metodo 'set'
console.log(quadrado.altura)
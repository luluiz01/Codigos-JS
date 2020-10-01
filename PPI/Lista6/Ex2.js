/* 2. Reescreva o código anterior usando a nova sintaxe de classe do ES2015,
      de modo que o código de exemplo dado continue funcionando igualmente.
 */


class Usuario {

  constructor(nome) {
    this.n = nome
  }

  obtemNome() {
    return `${this.n}`
  }

}
let user = new Usuario('Fulano');
console.log(`Meu nome é ${user.obtemNome()}.`);

let user1 = new Usuario('Luiz');
console.log(`Meu nome é ${user1.obtemNome()}.`);
/* 1. Usando a sintaxe tradicional de construtor e protótipo, crie um construtor chamado Usuario(nome),
  com um método associado obtemNome(), que retorne uma string com o nome informado, de modo que o código:

let user = new Usuario('Fulano');
console.log(`Meu nome é ${user.obtemNome()}.`);
Resulte na saída:

Meu nome é Fulano.
 */

function Usuario(nome) {
  this.n = nome
}
Usuario.prototype.obtemNome = function () {
  return `${this.n}`
}

let user = new Usuario('Fulano');
console.log(`Meu nome é ${user.obtemNome()}.`);


let user1 = new Usuario('Luiz');
console.log(`Meu nome é ${user1.obtemNome()}.`);
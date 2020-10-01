/* function Circulo(c, r) {
  this.cor = c;// construtor com o nome da funcao em letra maiuscula
  this.raio = r;

}

Circulo.prototype.mudarCor = function () {
  console.log('Mudando cor...');
  this.cor = c;
}

Circulo.prototype.toString = function () {
  return `Circulo ${this.cor} de raio ${this.raio}`;
}

let circ1 = new Circulo('azul', 10)// circ1 é um objeto que pertence a classe Circulo
let circ2 = new Circulo('verde', 20)

console.log(circ1)
console.log(circ1.toString())
console.log(circ2.toString()) */



// deixandoo código anterior mais moderno, ES6 
/* class Circulo {
  constructor(c, r) {
    this.cor = c;// construtor com o nome da funcao em letra maiuscula
    this.raio = r;
  }

  mudarCor(c) {
    console.log('Mudando cor...');
    this.cor = c;
  }

  toString() {
    return `Circulo ${this.cor} de raio ${this.raio}`;
  }
}
let circ1 = new Circulo('azul', 10)// circ1 é um objeto que pertence a classe Circulo
let circ2 = new Circulo('verde', 20)

console.log(circ1)
console.log(circ1.toString())
console.log(circ2.toString()) */

//Herança
/* class Ave {
  voar() {
    console.log('Ave voando!')
  }

  vocalizar() {
    console.log('Ave vocalizando!')
  }
}

class Pato extends Ave {
  vocalizar() {
    console.log('Qua Qua!!!')
  }

  nadar() {
    console.log('Pato Nadando!!!')
  }
}

class Arara extends Ave {
  vocalizar() {
    console.log('Arara ararando! KK')
  }
}

let pato = new Pato();
pato.voar();
pato.vocalizar();
pato.nadar();
console.log()

let arara = new Arara();
arara.voar();
arara.vocalizar(); */


//prototype com herança

class Usuario {
  constructor() {
    console.log('Contruindo um novo usuário!');
  }
}

class UsuarioPremium extends Usuario {
  constructor() {
    super()//Chame o método construtor equivalente(mesmo nome) da super classe
    console.log('Contruindo um usuário Premium')
  }

  toString() {
    return "Eu sou premium"
  }
}

let prem = new UsuarioPremium();
console.log(prem.toString())
/* 6. Crie uma classe Forma e transforme Quadrado e TrianguloEqem suas subclasses.
  Acrescente o método toString a Forma de modo que o seguinte código:

let formas = [ new Quadrado(5), new Quadrado(10),
               new TrianguloEq(5), new TrianguloEq(10) ];
for(forma of formas){
    console.log(`${forma.constructor.name}: ${forma.toString()}`);
}

Resulte em:

Quadrado: p=20, a=25
Quadrado: p=40, a=100
TrianguloEq: p=15, a=10.825317547305483
TrianguloEq: p=30, a=43.30127018922193 */

class Forma {
  constructor() {
  }

  toString() {
    return `p = ${this.perimetro()}, a = ${this.area()}`
  }
}



class TrianguloEq extends Forma {
  constructor(lado) {
    super()
    this.l = lado
  }
  area() {
    return `${Math.sqrt(3) / 4 * (this.l ** 2)}`
  }

  perimetro() {
    return `${this.l * 3}`
  }
}

class Quadrado extends Forma {
  constructor(lado) {
    super()
    this.l = lado
  }
  area() {
    return `${this.l ** 2}`
  }

  perimetro() {
    return `${this.l * 4}`
  }

}

let formas = [new Quadrado(5), new Quadrado(10), new TrianguloEq(5), new TrianguloEq(10)];


for (forma of formas) {
  console.log(`${forma.constructor.name}: ${forma.toString()}`);
}


/* let t = new TrianguloEq(10);
console.log(t.perimetro(), t.area());

let q = new Quadrado(10);
console.log(q.perimetro(), q.area()); */
/* 5. Escreva classes chamadas TrianguloEq (equilátero) e Quadrado que recebam no construtor
um parâmetro para o tamanho do lado e tenham métodos chamadas area e perimetro que retornem os valores corretos.

Área do triângulo equilátero: R3 / 4 * L**2
Exemplo:

let t = new TrianguloEq(10);
console.log(t.perimetro(), t.area());

let q = new Quadrado(10);
console.log(q.perimetro(), q.area());
Saída esperada:

30 43.30127018922193
40 100 */

class TrianguloEq {
  constructor(lado) {
    this.l = lado
  }
  area() {
    return `${Math.sqrt(3) / 4 * (this.l ** 2)}`
  }

  perimetro() {
    return `${this.l * 3}`
  }
}

class Quadrado {
  constructor(lado) {
    this.l = lado
  }
  area() {
    return `${this.l ** 2}`
  }

  perimetro() {
    return `${this.l * 4}`
  }

}


let t = new TrianguloEq(10);
console.log(t.perimetro(), t.area());

let q = new Quadrado(10);
console.log(q.perimetro(), q.area());
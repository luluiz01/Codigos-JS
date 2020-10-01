/* 3. Crie uma classe chamada Ponto que represente um ponto no espaço, com um construtor que receba os parâmetros x e y
desse ponto e um método distancia que calcule a distância cartesiana deste até outro ponto (outro objeto da mesma classe).

Distância entre os pontos (x1​,y1​) e (x2​,y2​):
Use Math.sqrt para calcular a raiz quadrada.
Exemplo:

let p1 = new Ponto(3, 4);
let p2 = new Ponto(5, 6);
console.log(p1.distancia(p2));
Saída esperada:

2.8284271247461903 */

class Ponto {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distancia(p) {
    return Math.sqrt(((this.x - p.x) ** 2) + ((this.y - p.y) ** 2));
  }

}

let p1 = new Ponto(3, 4);
let p2 = new Ponto(5, 6);
console.log(p1.distancia(p2));



/* 4 Escreva uma função calcula que receba um array e retorne um objeto contendo
 a soma e a média aritmética de todos seus elementos. Por exemplo, calcula( [4, 8, 20, 6] ),
 deve retornar o objeto { soma: 38, media: 9.5 }. A função deve funcionar para arrays de qualquer tamanho. */

function calcula(...numerosArray) {
  let soma = 0;
  for (let i of numerosArray) {
    soma += i;
  }

  let media = soma / numerosArray.length;

  return { Soma: soma, Média: media }

}

console.log(calcula(1, 2, 3, 4, 5, 6, 7, 8, 9))



/*
function soma(a, b) {
  return console.log(`A soma é: ${a + b}`)
}
soma(5, 6)
//console.log(soma(5, 6)) */
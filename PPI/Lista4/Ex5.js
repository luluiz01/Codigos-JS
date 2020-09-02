/* 5 Modifique a função anterior para que ela seja chamada com um número variável
 de argumentos numéricos, ao invés de um array. Por exemplo, calcula(4, 8, 20, 6), 
 deve retornar o objeto { soma: 38, media: 9.5 }. */
function calcula(numerosArray) {
  let soma = 0;
  for (let i of numerosArray) {
    soma += i;
  }

  let media = soma / numerosArray.length;

  return { Soma: soma, Média: media }

}

console.log(calcula([1, 2, 3, 4, 5, 6]))

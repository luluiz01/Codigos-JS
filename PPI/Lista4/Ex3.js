/* 3. Sem modificar a linha inicial que cria o array com 3 elementos, use uma instrução com o método
 splice e outra com o método push, de modo a resultar no array que gera a seguinte saída:

- ciano
- roxo
- laranja
- verde
- amarelo
- cinza */

let cores = ['ciano', 'verde', 'amarelo'];
cores.splice(1, 0, 'Roxo', 'Laranja')
cores.push("Cinza")

console.log(cores)
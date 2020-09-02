/* 3. Modifique a questão anterior para percorrer o objeto com uma estrutura de loop e escrever na saída 
automaticamente todas as propriedades e valores, uma por linha.
 */

let livro = {

  'titulo': 'As aventuras da Mika perdida',
  'autor': 'Mikaela Brito',
  'numeroDePaginas': '10'

};


livro['Editora'] = 'IFB';

for (let prop in livro) {
  console.log(prop)
  console.log(livro[prop])
  console.log(' ')

}

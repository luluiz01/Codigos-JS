let usuario = {

  'nome completo': "Alice solsa Almeida",
  'Login': 'Alice123',
  'email': 'alice@gmail.com',
  'premium': true,
  'pontos': 315
};


usuario['Foto'] = 'Alice.jpg'//Adicionando um atributo no objeto
usuario.cidade = "paranoa"

/* console.log(usuario["Login"]);
console.log(usuario)
 */
for (let prop in usuario) {
  console.log(`O valor de ${prop} é ${usuario[prop]}`)
}
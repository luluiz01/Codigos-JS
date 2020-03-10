// Verifique se os campos do objeto abaixo se estão vazios, nulos, não definidos ou zero, 
// se estiverem vazios, armazene-os em um array e por fim, imprima-o com um
// console.log, onde a saída deve ser exibida da seguinte forma:

//The following items are empty: lastName,birthDate,age,favoriteMusic,favoriteFood


const badFields = {
    "firstName": "Thiago",
    "lastName": "",
    "birthDate": "",
    "ocuppation": "Programmer",
    "favoriteGame": "Counter-Strike Global Offensive",
    "age": 0,
    "favoriteMusic": null,
    "favoriteFood": undefined,
};
if (!badFields.firstName) {
    return true
}
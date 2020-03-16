// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

//Tempate String
const produto = 'Ipad'
console.log(`${produto} é caro`) // pode quebrar linha

//Destructurin
const [l, e, ...tras] = 'Coder'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)
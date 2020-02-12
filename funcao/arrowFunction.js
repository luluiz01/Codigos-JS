let dobro = function (a) {
    return a * 2
}
console.log(dobro(5))

dobro = (a) => {
    return a * 2
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Ola'
ola = _ => 'Olá'// possui um param

console.log(ola())
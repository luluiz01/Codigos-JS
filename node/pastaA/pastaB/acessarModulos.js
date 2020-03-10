const moduloA = require('../../moduloA')
console.log(moduloA.nome)

const http = require('http')
http.createServer((req, res) => {
    req.write('Ola Boa tarde')
    res.end()
}).listen(8080)
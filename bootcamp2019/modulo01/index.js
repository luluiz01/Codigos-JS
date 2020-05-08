const express = require("express");

const server = express();

//Ler json do corpo da requisição
server.use(express.json());

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "name": "Diego", "email": "luiz.pventura@gmail.com"}

const users = ["Luiz", "John", "Mari", "Rafa", "Luca"];

server.use((req, res, next) => {
  console.time("Request");
  console.log(`Metodo: ${req.method} && URL: ${req.url}`);

  next();
  console.timeEnd("Request");
});

function checkUserExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ erro: "User is required!" });
  }

  return next();
}

function checkUserInArray(req, res, next) {
  const user = users[req.params.index];

  if (!user) {
    return res.status(400).json({ erro: "User does not exists!" });
  }

  req.user = user;

  return next();
}

//Listagem de todos usuários
server.get("/users", (req, res) => {
  return res.json(users);
});

// Listagem de um usuário específico
server.get("/users/:index", checkUserInArray, (req, res) => {
  // const { index } = req.params;
  //const id = req.params.id

  return res.json(req.user);
});

//Adicionar um novo usuário
server.post("/users", checkUserExists, (req, res) => {
  const { name } = req.body;
  //const name = req.body.name

  users.push(name);

  return res.json(users);
});

//Atualizar usuário
server.put("/users/:index", checkUserInArray, checkUserExists, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

//Delete user
server.delete("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);
  return res.send();
});

server.listen(3000);

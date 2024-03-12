// Importando o express
const express = require("express");

// Incializando o express
const app = express();

// Configurando o express para receber dados em JSON
app.use(express.json());

// Variável para armazenar nossos usuários
const users = [];


/** Rotas */

// Criando uma rota para retornar todos os usuários
app.get("/usuarios", (req, res) => {
  res.json(users);
})

// Criando uma rota para criar um novo usuário
app.post("/usuarios", (req, res) => {
  const user = req.body;

  users.push(user);

  res.json(user);
})


app.listen(3000, () => {
  console.log("API is running on port 3000");
});

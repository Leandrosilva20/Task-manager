const express = require("express");
const conectarDB = require("./config/db");
const rotasTarefas = require("./routes/tasks");

const app = express();
const PORTA = process.env.PORT || 3000;

conectarDB();

app.use(express.json());

app.use("/tasks", rotasTarefas);

app.get("/", (req, res) => {
  res.send("<h1>Trabalho 2 — Tarefas com MongoDB</h1><p>Acesse <a href='/tasks'>/tasks</a></p>");
});

app.listen(PORTA, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORTA}`);
});

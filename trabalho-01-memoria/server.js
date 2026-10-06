const express = require("express");
const rotas = require("./routes/tasks");
const app = express();
const PORTA = 3001;

app.use(express.json());
app.use("/tasks", rotas);

app.get("/", (req, res) => {
  res.send("<h1>Trabalho 1 — Tarefas em Memória</h1><p>Acesse <a href='/tasks'>/tasks</a></p>");
});

app.listen(PORTA, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORTA}/tasks`);
});

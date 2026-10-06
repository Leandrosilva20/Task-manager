const express = require("express");
const conectar = require("./config/db");
const rotas = require("./routes/tasks");

const app = express();
const PORTA = 3000;

conectar();

app.use(express.json());
app.use("/tasks", rotas);

app.get("/", (req, res) => {
  res.send("<h1>Tarefas com MongoDB</h1><p>Acesse /tasks</p>");
});

app.listen(PORTA, () => console.log(`🚀 Rodando na porta ${PORTA}`));

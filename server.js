const express = require("express");
const tasksRoutes = require("./routes/tasks");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/tasks", tasksRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Sistema de Gerenciamento de Tarefas</h1><p>Acesse /tasks</p>");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ erro: "Erro interno no servidor" });
});

app.listen(PORT, () => console.log("🚀 Servidor rodando na porta 3000"));

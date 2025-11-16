// index.js - servidor Express
const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks');

app.use(express.json());

// rotas
app.use('/tasks', tasksRouter);

// middleware de erro simples
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Erro interno' });
});

// Só inicia o servidor se não estivermos em modo de teste
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}

module.exports = app;

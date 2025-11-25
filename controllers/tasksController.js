// controllers/tasksController.js
const store = require('../data/tasksData');

// Simula operação assíncrona (ex.: I/O) com Promise
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Listar tarefas (async/await)
exports.listTasks = async (req, res, next) => {
  try {
    await delay(10); // simulação
    const tasks = await store.getAll();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

// Criar tarefa (uso de Promises + async/await)
exports.createTask = async (req, res, next) => {
  try {
    const { title, status } = req.body;
    // exemplo de verificação adicional
    const created = await store.create({ title, status: status || 'pendente' });
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
};

// Atualizar tarefa
exports.updateTask = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { title, status } = req.body;
    if (Number.isNaN(id)) {
      const err = new Error('ID inválido');
      err.status = 400;
      throw err;
    }
    const updated = await store.update(id, { title, status });
    if (!updated) {
      const err = new Error('Tarefa não encontrada');
      err.status = 404;
      throw err;
    }
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// Deletar tarefa
exports.deleteTask = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) {
      const err = new Error('ID inválido');
      err.status = 400;
      throw err;
    }
    const removed = await store.remove(id);
    if (!removed) {
      const err = new Error('Tarefa não encontrada');
      err.status = 404;
      throw err;
    }
    res.json({ message: 'Tarefa removida com sucesso' });
  } catch (err) {
    next(err);
  }
};

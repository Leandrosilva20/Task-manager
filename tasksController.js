const Task = require('../models/taskModel');

exports.getAll = async (req, res, next) => {
  try {
    const tasks = await Task.listAll();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { titulo, status } = req.body;
    if (!titulo) return res.status(400).json({ error: 'Campo \"titulo\" é obrigatório' });
    const newTask = await Task.create({ titulo, status });
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { titulo, status } = req.body;
    const updated = await Task.update(id, { titulo, status });
    if (!updated) return res.status(404).json({ error: 'Tarefa não encontrada' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const removed = await Task.remove(id);
    if (!removed) return res.status(404).json({ error: 'Tarefa não encontrada' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

exports.exampleCallback = (cb) => {
  setTimeout(() => cb(null, { message: 'Exemplo via callback' }), 0);
};
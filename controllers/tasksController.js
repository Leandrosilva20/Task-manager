const Task = require("../models/Task");

exports.getAllTasks = async (req, res) => {
  const { status, page = 1, limit = 10 } = req.query;
  const filtro = status ? { status } : {};
  const pular = (page - 1) * limit;

  const tarefas = await Task.find(filtro).skip(pular).limit(limit);
  const total = await Task.countDocuments(filtro);

  res.json({ total, página: page, dados: tarefas });
};

exports.createTask = async (req, res) => {
  try {
    const tarefa = await Task.create(req.body);
    res.status(201).json(tarefa);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};

exports.updateTask = async (req, res) => {
  const tarefa = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true, runValidators: true
  });
  if (!tarefa) return res.status(404).json({ erro: "Não encontrada" });
  res.json(tarefa);
};

exports.deleteTask = async (req, res) => {
  const tarefa = await Task.findByIdAndDelete(req.params.id);
  if (!tarefa) return res.status(404).json({ erro: "Não encontrada" });
  res.json({ mensagem: "Removida!" });
};

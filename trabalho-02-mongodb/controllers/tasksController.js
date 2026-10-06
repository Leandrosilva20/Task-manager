const Task = require("../models/Task");

exports.getAllTasks = async (req, res) => {
  try {
    const { status, sort = "-createdAt", page = 1, limit = 10 } = req.query;
    const filtro = status ? { status } : {};
    const pular = (parseInt(page) - 1) * parseInt(limit);

    const tarefas = await Task.find(filtro)
      .sort(sort)
      .skip(pular)
      .limit(parseInt(limit));

    const total = await Task.countDocuments(filtro);

    res.status(200).json({
      total,
      página: parseInt(page),
      dados: tarefas
    });
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar tarefas" });
  }
};

exports.createTask = async (req, res) => {
  try {
    const tarefa = await Task.create(req.body);
    res.status(201).json(tarefa);
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ erro: err.message });
    }
    res.status(500).json({ erro: "Erro ao criar tarefa" });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const tarefa = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!tarefa) {
      return res.status(404).json({ erro: "Tarefa não encontrada" });
    }
    res.status(200).json(tarefa);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao atualizar tarefa" });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const tarefa = await Task.findByIdAndDelete(req.params.id);
    if (!tarefa) {
      return res.status(404).json({ erro: "Tarefa não encontrada" });
    }
    res.status(200).json({ mensagem: "Tarefa removida com sucesso" });
  } catch (err) {
    res.status(500).json({ erro: "Erro ao remover tarefa" });
  }
};

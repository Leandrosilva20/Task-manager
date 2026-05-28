const Task = require("../models/Task");

// GET /tasks — Lista tarefas com filtro, paginação e ordenação
const listTasks = async (req, res, next) => {
  try {
    const { status, createdAt, page = 1, limit = 10, sort = "-createdAt" } = req.query;

    // Filtro: só tarefas do usuário autenticado
    const filter = { user: req.user._id };
    if (status) filter.status = status;
    if (createdAt) filter.createdAt = { $gte: new Date(createdAt) };

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const total = await Task.countDocuments(filter);
    const tasks = await Task.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit));

    res.status(200).json({
      success: true,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / parseInt(limit)),
      count: tasks.length,
      data: tasks,
    });
  } catch (error) {
    next(error);
  }
};

// GET /tasks/:id — Busca uma tarefa pelo ID
const getTask = async (req, res, next) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, user: req.user._id });

    if (!task) {
      return res.status(404).json({ success: false, message: "Tarefa não encontrada." });
    }

    res.status(200).json({ success: true, data: task });
  } catch (error) {
    next(error);
  }
};

// POST /tasks — Cria uma nova tarefa
const createTask = async (req, res, next) => {
  try {
    const { title, description, status } = req.body;

    const task = await Task.create({
      title,
      description,
      status,
      user: req.user._id,
    });

    res.status(201).json({ success: true, data: task });
  } catch (error) {
    next(error);
  }
};

// PUT /tasks/:id — Atualiza uma tarefa
const updateTask = async (req, res, next) => {
  try {
    const { title, description, status } = req.body;

    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { title, description, status },
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({ success: false, message: "Tarefa não encontrada." });
    }

    res.status(200).json({ success: true, data: task });
  } catch (error) {
    next(error);
  }
};

// DELETE /tasks/:id — Remove uma tarefa
const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.user._id });

    if (!task) {
      return res.status(404).json({ success: false, message: "Tarefa não encontrada." });
    }

    res.status(200).json({ success: true, message: "Tarefa removida com sucesso." });
  } catch (error) {
    next(error);
  }
};

module.exports = { listTasks, getTask, createTask, updateTask, deleteTask };

const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  listTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

// Todas as rotas de tarefas exigem autenticação
router.use(protect);

// GET /tasks — Lista tarefas (com filtro, paginação e ordenação)
router.get("/", listTasks);

// GET /tasks/:id — Busca tarefa por ID
router.get("/:id", getTask);

// POST /tasks — Cria nova tarefa
router.post("/", createTask);

// PUT /tasks/:id — Atualiza tarefa
router.put("/:id", updateTask);

// DELETE /tasks/:id — Remove tarefa
router.delete("/:id", deleteTask);

module.exports = router;

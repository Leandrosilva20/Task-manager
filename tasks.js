// routes/tasks.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/tasksController');
const { createValidator, updateValidator } = require('../controllers/validators');

// Listar tarefas
router.get('/', controller.listTasks);

// Criar tarefa
router.post('/', createValidator, controller.createTask);

// Atualizar tarefa
router.put('/:id', updateValidator, controller.updateTask);

// Deletar tarefa
router.delete('/:id', controller.deleteTask);

module.exports = router;

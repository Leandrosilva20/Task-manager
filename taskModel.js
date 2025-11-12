const { v4: uuidv4 } = require('uuid');

let tasks = [
  { id: uuidv4(), titulo: 'Comprar leite', status: 'pendente' },
  { id: uuidv4(), titulo: 'Enviar relatório', status: 'concluída' }
];

function _asyncWrap(result) {
  return new Promise((resolve) => setImmediate(() => resolve(result)));
}

module.exports = {
  listAll: async () => _asyncWrap(tasks),

  create: async ({ titulo, status = 'pendente' }) => {
    const newTask = { id: uuidv4(), titulo, status };
    tasks.push(newTask);
    return _asyncWrap(newTask);
  },

  findById: async (id) => {
    const task = tasks.find((t) => t.id === id) || null;
    return _asyncWrap(task);
  },

  update: async (id, { titulo, status }) => {
    const idx = tasks.findIndex((t) => t.id === id);
    if (idx === -1) return _asyncWrap(null);
    if (titulo !== undefined) tasks[idx].titulo = titulo;
    if (status !== undefined) tasks[idx].status = status;
    return _asyncWrap(tasks[idx]);
  },

  remove: async (id) => {
    const idx = tasks.findIndex((t) => t.id === id);
    if (idx === -1) return _asyncWrap(false);
    tasks.splice(idx, 1);
    return _asyncWrap(true);
  },

  __setTasks: (newTasks) => { tasks = newTasks; }
};
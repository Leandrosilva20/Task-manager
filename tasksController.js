let tasks = [];
let nextId = 1;

const delay = () => new Promise(res => setTimeout(res, 50));

exports.getAllTasks = async (req, res) => {
  await delay();
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  await delay();
  const { título, status = "pendente" } = req.body;
  if (!título) return res.status(400).json({ erro: "'título' é obrigatório" });
  
  const nova = { id: nextId++, título: título.trim(), status };
  tasks.push(nova);
  res.status(201).json(nova);
};

exports.updateTask = async (req, res) => {
  await delay();
  const tarefa = tasks.find(t => t.id === parseInt(req.params.id));
  if (!tarefa) return res.status(404).json({ erro: "Tarefa não encontrada" });
  
  if (req.body.título) tarefa.título = req.body.título.trim();
  if (req.body.status) tarefa.status = req.body.status;
  res.json(tarefa);
};

exports.deleteTask = async (req, res) => {
  await delay();
  const idx = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ erro: "Tarefa não encontrada" });
  
  tasks.splice(idx, 1);
  res.json({ mensagem: "Removida com sucesso" });
};

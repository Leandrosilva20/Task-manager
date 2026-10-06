let tarefas = [];
let proximoId = 1;

exports.getAllTasks = async (req, res) => {
  res.status(200).json(tarefas);
};

exports.createTask = async (req, res) => {
  try {
    const { título, status = "pendente" } = req.body;
    if (!título) {
      return res.status(400).json({ erro: "O título é obrigatório" });
    }
    const novaTarefa = { id: proximoId++, título, status };
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao criar tarefa" });
  }
};

exports.updateTask = async (req, res) => {
  const tarefa = tarefas.find(t => t.id === parseInt(req.params.id));
  if (!tarefa) return res.status(404).json({ erro: "Tarefa não encontrada" });
  
  if (req.body.título) tarefa.título = req.body.título;
  if (req.body.status) tarefa.status = req.body.status;
  res.json(tarefa);
};

exports.deleteTask = async (req, res) => {
  const indice = tarefas.findIndex(t => t.id === parseInt(req.params.id));
  if (indice === -1) return res.status(404).json({ erro: "Tarefa não encontrada" });
  tarefas.splice(indice, 1);
  res.json({ mensagem: "Tarefa removida com sucesso" });
};

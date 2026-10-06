
# Sistema de Gerenciamento de Tarefas — MongoDB

Projeto desenvolvido com **Node.js**, **Express**, **MongoDB** e **Mongoose** — com persistência real de dados.

---

## Pré-requisitos
- Ter o **MongoDB** instalado e rodando na máquina
- Ter o **Node.js** instalado

## Instalação e Execução

```bash
npm install
npm start
Acesse: http://localhost:3000/tasks

Rotas da API

Método	Rota	Descrição	Como usar
GET	/tasks	Listar todas	?status=pendente&page=1&limit=5
POST	/tasks	Criar nova	{"título": "Nome", "descrição": "Detalhe"}
PUT	/tasks/:id	Atualizar tarefa	Envie os campos que quer alterar
DELETE	/tasks/:id	Remover tarefa	—

Detalhes:
título — obrigatório
status — opcional: pendente (padrão) · em andamento · concluída
Os dados ficam salvos no banco e não somem ao reiniciar o servidor

Estrutura do Projeto

Task-manager/
├── config/
│   └── db.js
├── models/
│   └── Task.js
├── controllers/
│   └── tasksController.js
├── routes/
│   └── tasks.js
├── server.js
├── package.json
└── README.md

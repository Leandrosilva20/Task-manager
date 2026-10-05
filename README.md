
```markdown
# Sistema de Gerenciamento de Tarefas

Projeto desenvolvido com **Node.js** e **Express** — sistema simplificado de gerenciamento de tarefas com armazenamento em memória.

## Tecnologias
- Node.js
- Express
- Programação assíncrona (async/await)

## Instalação e Execução

```bash
npm install
npm start
```

Servidor em execução em: **http://localhost:3000**

## Rotas da API

| Método | Rota | Descrição | Corpo da Requisição |
|---|---|---|---|
| GET | `/tasks` | Listar todas as tarefas | — |
| POST | `/tasks` | Criar nova tarefa | `{ "título": "Nome", "status": "pendente" }` |
| PUT | `/tasks/:id` | Atualizar tarefa | `{ "título": "Novo", "status": "concluída" }` |
| DELETE | `/tasks/:id` | Remover tarefa | — |

### Detalhes:
- `status` é opcional na criação → padrão: `"pendente"`
- Respostas: `200` Sucesso · `201` Criada · `400` Dados inválidos · `404` Não encontrada

## Estrutura do Projeto

```
Task-manager/
├── controllers/
│   └── tasksController.js
├── routes/
│   └── tasks.js
├── server.js
├── package.json
└── README.md


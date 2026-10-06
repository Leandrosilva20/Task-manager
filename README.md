# 📋 Task Manager — API de Gerenciamento de Tarefas

API REST para gerenciamento de tarefas, desenvolvida com **Node.js**, **Express**, **MongoDB** e **Mongoose**, com persistência real de dados.

---

## ✨ Funcionalidades

- Criar, listar, atualizar e remover tarefas
- Filtro por status
- Paginação nas listagens
- Dados persistidos no MongoDB (não são perdidos ao reiniciar o servidor)

## 🛠️ Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## 📦 Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [MongoDB](https://www.mongodb.com/try/download/community) instalado e em execução na máquina

## 🚀 Instalação e execução

```bash
# Clone o repositório
git clone https://github.com/Leandrosilva20/Task-manager.git

# Entre na pasta do projeto
cd Task-manager

# Instale as dependências
npm install

# Inicie o servidor
npm start
```

A API estará disponível em: **http://localhost:3000/tasks**

## 📡 Rotas da API

| Método | Rota         | Descrição        | Como usar                                        |
|--------|--------------|------------------|--------------------------------------------------|
| GET    | `/tasks`     | Listar tarefas   | `?status=pendente&page=1&limit=5`                |
| POST   | `/tasks`     | Criar nova tarefa| `{"título": "Nome", "descrição": "Detalhe"}`     |
| PUT    | `/tasks/:id` | Atualizar tarefa | Envie apenas os campos que deseja alterar        |
| DELETE | `/tasks/:id` | Remover tarefa   | —                                                |

### Campos da tarefa

| Campo       | Obrigatório | Descrição                                                        |
|-------------|-------------|------------------------------------------------------------------|
| `título`    | Sim         | Nome da tarefa                                                   |
| `descrição` | Não         | Detalhes da tarefa                                               |
| `status`    | Não         | `pendente` (padrão) · `em andamento` · `concluída`               |

### Exemplos de uso

**Criar uma tarefa**

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"título": "Estudar Node.js", "descrição": "Revisar Express e Mongoose"}'
```

**Listar tarefas pendentes (página 1, 5 por página)**

```bash
curl "http://localhost:3000/tasks?status=pendente&page=1&limit=5"
```

**Atualizar o status de uma tarefa**

```bash
curl -X PUT http://localhost:3000/tasks/ID_DA_TAREFA \
  -H "Content-Type: application/json" \
  -d '{"status": "concluída"}'
```

**Remover uma tarefa**

```bash
curl -X DELETE http://localhost:3000/tasks/ID_DA_TAREFA
```

## 📁 Estrutura do projeto

```
Task-manager/
├── config/
│   └── db.js                  # Conexão com o MongoDB
├── models/
│   └── Task.js                # Schema da tarefa (Mongoose)
├── controllers/
│   └── tasksController.js     # Lógica das rotas
├── routes/
│   └── tasks.js               # Definição das rotas
├── server.js                  # Ponto de entrada da aplicação
├── package.json
└── README.md
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch: `git checkout -b minha-feature`
3. Faça o commit: `git commit -m "Adiciona minha feature"`
4. Envie para o repositório: `git push origin minha-feature`
5. Abra um Pull Request

## 👤 Autor

Desenvolvido por [Leandrosilva20](https://github.com/Leandrosilva20).

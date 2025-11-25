SISTEMA DE GERENCIAMENTO DE TAREFAS
Autor: Leandro Bragaça da Silva

Descrição
Este projeto é um sistema simples de gerenciamento de tarefas desenvolvido com Node.js e Express. Ele permite criar, listar, atualizar e deletar tarefas utilizando armazenamento em um arquivo JSON.

Tecnologias utilizadas

Node.js

Express

File System (fs)

JavaScript

Nodemon (opcional)

Estrutura do projeto
Task-manager/
controllers/
taskController.js
routes/
taskRoutes.js
data/
tasks.json
index.js
package.json
README.md

Como instalar

Abra o terminal na pasta do projeto

Execute o comando:
npm install

Como iniciar o servidor
Execute:
node index.js

Se estiver funcionando, aparecerá:
Servidor rodando na porta 3000
http://localhost:3000/tasks

Rotas do sistema

Listar todas as tarefas
GET /tasks

Criar uma nova tarefa
POST /tasks
Body JSON exemplo:
{
"title": "Primeira tarefa",
"description": "Descrição da tarefa"
}

Buscar uma tarefa por ID
GET /tasks/:id

Atualizar uma tarefa
PUT /tasks/:id

Deletar uma tarefa
DELETE /tasks/:id

Objetivo do projeto
Este projeto foi criado para treinar:

Criação de API com Express

Rotas CRUD

Manipulação de arquivos JSON

Programação assíncrona

Organização MVC básica

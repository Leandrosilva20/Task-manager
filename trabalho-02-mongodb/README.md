# Trabalho 2 — Sistema de Tarefas com MongoDB

API REST com **Node.js**, **Express**, **MongoDB** e **Mongoose** — persistência real de dados.

## Funcionalidades
- ✅ Criar, listar, atualizar e remover tarefas
- ✅ Filtro por status
- ✅ Paginação e ordenação
- ✅ Dados salvos no banco (não somem ao reiniciar)

## Pré-requisitos
- Ter o **MongoDB** instalado e rodando na máquina
- Ter o **Node.js** instalado

## Como executar
```bash
npm install
npm start

Acesse: http://localhost:3000/tasks

Método	Rota	Descrição	Como usar
GET	/tasks	Listar todas	?status=pendente&page=1&limit=5
POST	/tasks	Criar nova	{"título": "Nome", "descrição": "Detalhe"}
PUT	/tasks/:id	Atualizar	{"status": "concluída"}
DELETE	/tasks/:id	Remover	—

Desenvolvido por Leandrosilva20

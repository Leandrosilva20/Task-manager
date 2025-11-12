# Sistema Simplificado de Gerenciamento de Tarefas

Projeto em Node.js + Express para praticar CRUD e programação assíncrona (armazenamento em memória).

## Requisitos
- Node.js v14+ (recomendado v16+)

## Instalação

1. Clone ou baixe os arquivos
2. No diretório do projeto execute:

```bash
npm install
```

3. Inicie o servidor:

```bash
npm start
```

ou em desenvolvimento (com nodemon):

```bash
npm run dev
```

O servidor rodará em `http://localhost:3000` por padrão.

## Rotas

- `GET /tasks` — lista todas as tarefas
- `POST /tasks` — cria uma tarefa
- `PUT /tasks/:id` — atualiza uma tarefa
- `DELETE /tasks/:id` — deleta uma tarefa

## Observações
- Armazenamento em memória (dados se perdem ao reiniciar o servidor).
- Código usa async/await e promises para simular operações assíncronas.

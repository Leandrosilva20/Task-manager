# Sistema Simplificado de Gerenciamento de Tarefas (Pronto para entrega)

Projeto em Node.js + Express — armazenamento em memória (array) — demonstração de programação assíncrona.

## O que foi adicionado a esta versão
- Validação de entrada com `express-validator`
- Testes automatizados com `jest` e `supertest`
- Dockerfile para execução em container
- Export do `app` para permitir testes
- Documentação melhorada e exemplos de uso (Postman / cURL)

## Requisitos
- Node.js 14+ recomendado
- npm

## Instalação
1. Extraia o projeto ou abra o diretório.
2. Instale dependências:
   ```
   npm install
   ```

## Executando
- Em modo produção:
  ```
  npm start
  ```
- Em modo desenvolvimento (requer nodemon):
  ```
  npm run dev
  ```
- Executar testes:
  ```
  npm test
  ```

O servidor roda por padrão em `http://localhost:3000`.

## Rotas (API)
- `GET /tasks` — lista todas as tarefas.
- `POST /tasks` — cria uma tarefa.
  - Body JSON: `{ "title": "Comprar leite", "status": "pendente" }`
  - `status` válido: `pendente`, `em andamento`, `concluida`
- `PUT /tasks/:id` — atualiza uma tarefa (title e/ou status).
- `DELETE /tasks/:id` — remove uma tarefa.

## Exemplos (cURL)
1. Criar tarefa:
   ```
   curl -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d '{"title":"Comprar leite"}'
   ```
2. Listar:
   ```
   curl http://localhost:3000/tasks
   ```
3. Atualizar:
   ```
   curl -X PUT http://localhost:3000/tasks/1 -H "Content-Type: application/json" -d '{"status":"concluida"}'
   ```
4. Deletar:
   ```
   curl -X DELETE http://localhost:3000/tasks/1
   ```

## Docker
- Build:
  ```
  docker build -t task-manager .
  ```
- Run:
  ```
  docker run -p 3000:3000 task-manager
  ```

## Entrega
Inclua este diretório compactado (`task-manager.zip`) com o código-fonte, `README.md` e os testes.

## Autor
Leandro Bragaça da Silva

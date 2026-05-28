# Task Manager Backend v2

API REST para gerenciamento de tarefas com **Node.js**, **Express**, **MongoDB** e autenticação **JWT**.

---

## Tecnologias

- Node.js + Express
- MongoDB + Mongoose
- JWT (autenticação)
- Bcryptjs (hash de senhas)
- Jest + Supertest (testes)

---

## Instalação

```bash
git clone https://github.com/Leandrosilva20/task-manager-backend.git
cd task-manager-backend
npm install
```

Crie o arquivo `.env` na raiz com base no `.env.example`:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=seu_segredo_aqui
JWT_EXPIRES_IN=7d
```

---

## Executando

```bash
# Produção
npm start

# Desenvolvimento (nodemon)
npm run dev
```

---

## Testes

```bash
npm test
```

---

## Estrutura do Projeto

```
task-manager/
├── server.js
├── app.js
├── .env.example
├── package.json
├── README.md
└── src/
    ├── config/
    │   └── database.js        # Conexão com MongoDB
    ├── models/
    │   ├── User.js            # Schema de usuário
    │   └── Task.js            # Schema de tarefa
    ├── controllers/
    │   ├── authController.js  # Registro e login
    │   └── taskController.js  # CRUD de tarefas
    ├── routes/
    │   ├── authRoutes.js
    │   └── taskRoutes.js
    ├── middleware/
    │   ├── authMiddleware.js  # Proteção JWT
    │   └── errorMiddleware.js
    └── tests/
        ├── auth.test.js
        └── tasks.test.js
```

---

## Schema de Tarefa

| Campo         | Tipo     | Obrigatório | Descrição                              |
|---------------|----------|-------------|----------------------------------------|
| `title`       | String   | ✅          | Título da tarefa (máx. 100 caracteres) |
| `description` | String   | ❌          | Descrição (máx. 500 caracteres)        |
| `status`      | String   | ❌          | `pendente`, `em andamento`, `concluída`|
| `user`        | ObjectId | ✅          | Referência ao usuário dono da tarefa   |
| `createdAt`   | Date     | automático  | Data de criação                        |
| `updatedAt`   | Date     | automático  | Data de atualização                    |

---

## Rotas da API

### Autenticação

#### `POST /auth/register` — Cadastro
**Body:**
```json
{ "name": "Leandro", "email": "leandro@email.com", "password": "123456" }
```
**Resposta (201):**
```json
{ "success": true, "data": { "id": "...", "name": "Leandro", "email": "..." }, "token": "..." }
```

---

#### `POST /auth/login` — Login
**Body:**
```json
{ "email": "leandro@email.com", "password": "123456" }
```
**Resposta (200):**
```json
{ "success": true, "data": { "id": "...", "name": "Leandro", "email": "..." }, "token": "..." }
```

---

### Tarefas
> Todas as rotas de tarefas exigem o header: `Authorization: Bearer <token>`

---

#### `GET /tasks` — Listar tarefas
**Query params opcionais:**
| Param      | Descrição                                  | Exemplo              |
|------------|--------------------------------------------|----------------------|
| `status`   | Filtra por status                          | `?status=pendente`   |
| `createdAt`| Filtra por data de criação (a partir de)   | `?createdAt=2024-01-01` |
| `page`     | Página (padrão: 1)                         | `?page=2`            |
| `limit`    | Itens por página (padrão: 10)              | `?limit=5`           |
| `sort`     | Ordenação (padrão: `-createdAt`)           | `?sort=title`        |

**Resposta (200):**
```json
{
  "success": true,
  "total": 20,
  "page": 1,
  "pages": 2,
  "count": 10,
  "data": [...]
}
```

---

#### `GET /tasks/:id` — Buscar por ID
**Resposta (200):**
```json
{ "success": true, "data": { "_id": "...", "title": "...", "status": "..." } }
```

---

#### `POST /tasks` — Criar tarefa
**Body:**
```json
{ "title": "Estudar MongoDB", "description": "Praticar Mongoose", "status": "pendente" }
```
**Resposta (201):**
```json
{ "success": true, "data": { "_id": "...", "title": "...", "status": "pendente", ... } }
```

---

#### `PUT /tasks/:id` — Atualizar tarefa
**Body (campos opcionais):**
```json
{ "status": "concluída" }
```
**Resposta (200):**
```json
{ "success": true, "data": { "_id": "...", "status": "concluída", ... } }
```

---

#### `DELETE /tasks/:id` — Deletar tarefa
**Resposta (200):**
```json
{ "success": true, "message": "Tarefa removida com sucesso." }
```

---

## Testando com cURL

```bash
# Registrar
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Leandro","email":"leandro@email.com","password":"123456"}'

# Login
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"leandro@email.com","password":"123456"}'

# Criar tarefa (substitua TOKEN pelo token recebido)
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{"title":"Estudar Node.js","status":"pendente"}'

# Listar tarefas
curl http://localhost:3000/tasks \
  -H "Authorization: Bearer TOKEN"

# Filtrar por status com paginação
curl "http://localhost:3000/tasks?status=pendente&page=1&limit=5" \
  -H "Authorization: Bearer TOKEN"
```

---

## Autor

**Leandro Bragança da Silva**

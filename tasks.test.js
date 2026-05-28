const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const User = require("../src/models/User");
const Task = require("../src/models/Task");

let token;
let taskId;

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/taskmanager_test");
  await User.deleteMany({});
  await Task.deleteMany({});

  const res = await request(app).post("/auth/register").send({
    name: "Leandro",
    email: "leandro@email.com",
    password: "123456",
  });
  token = res.body.token;
});

afterAll(async () => {
  await User.deleteMany({});
  await Task.deleteMany({});
  await mongoose.connection.close();
});

describe("Tasks - CRUD", () => {
  it("deve criar uma nova tarefa", async () => {
    const res = await request(app)
      .post("/tasks")
      .set("Authorization", `Bearer ${token}`)
      .send({ title: "Estudar MongoDB", description: "Aprender Mongoose", status: "pendente" });

    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.title).toBe("Estudar MongoDB");
    taskId = res.body.data._id;
  });

  it("deve listar tarefas do usuário", async () => {
    const res = await request(app).get("/tasks").set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  it("deve filtrar tarefas por status", async () => {
    const res = await request(app).get("/tasks?status=pendente").set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    res.body.data.forEach((t) => expect(t.status).toBe("pendente"));
  });

  it("deve buscar uma tarefa por ID", async () => {
    const res = await request(app).get(`/tasks/${taskId}`).set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.data._id).toBe(taskId);
  });

  it("deve atualizar uma tarefa", async () => {
    const res = await request(app)
      .put(`/tasks/${taskId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({ status: "concluída" });

    expect(res.statusCode).toBe(200);
    expect(res.body.data.status).toBe("concluída");
  });

  it("deve deletar uma tarefa", async () => {
    const res = await request(app).delete(`/tasks/${taskId}`).set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });

  it("deve retornar 401 sem token", async () => {
    const res = await request(app).get("/tasks");
    expect(res.statusCode).toBe(401);
  });

  it("deve retornar 404 para tarefa inexistente", async () => {
    const fakeId = new mongoose.Types.ObjectId();
    const res = await request(app).get(`/tasks/${fakeId}`).set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toBe(404);
  });
});

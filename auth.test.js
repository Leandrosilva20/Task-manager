const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const User = require("../src/models/User");

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/taskmanager_test");
});

afterAll(async () => {
  await User.deleteMany({});
  await mongoose.connection.close();
});

afterEach(async () => {
  await User.deleteMany({});
});

describe("Auth - Registro", () => {
  it("deve registrar um novo usuário", async () => {
    const res = await request(app).post("/auth/register").send({
      name: "Leandro",
      email: "leandro@email.com",
      password: "123456",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.token).toBeDefined();
    expect(res.body.data.email).toBe("leandro@email.com");
  });

  it("deve retornar erro ao registrar sem campos obrigatórios", async () => {
    const res = await request(app).post("/auth/register").send({ email: "leandro@email.com" });
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });

  it("deve retornar erro ao registrar email duplicado", async () => {
    await request(app).post("/auth/register").send({ name: "Leandro", email: "leandro@email.com", password: "123456" });
    const res = await request(app).post("/auth/register").send({ name: "Leandro", email: "leandro@email.com", password: "123456" });
    expect(res.statusCode).toBe(400);
  });
});

describe("Auth - Login", () => {
  beforeEach(async () => {
    await request(app).post("/auth/register").send({ name: "Leandro", email: "leandro@email.com", password: "123456" });
  });

  it("deve fazer login com credenciais corretas", async () => {
    const res = await request(app).post("/auth/login").send({ email: "leandro@email.com", password: "123456" });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  it("deve retornar erro com senha incorreta", async () => {
    const res = await request(app).post("/auth/login").send({ email: "leandro@email.com", password: "errada" });
    expect(res.statusCode).toBe(401);
  });
});

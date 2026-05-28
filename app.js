const express = require("express");
const authRoutes = require("./src/routes/authRoutes");
const taskRoutes = require("./src/routes/taskRoutes");
const { notFound, errorHandler } = require("./src/middleware/errorMiddleware");

const app = express();

app.use(express.json());

// Rota de status
app.get("/", (req, res) => {
  res.json({ message: "API Task Manager v2 funcionando!" });
});

// Rotas
app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

// Middlewares de erro
app.use(notFound);
app.use(errorHandler);

module.exports = app;

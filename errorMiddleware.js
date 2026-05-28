// Rota não encontrada
const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Rota '${req.originalUrl}' não encontrada.`,
  });
};

// Tratamento global de erros
const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  let message = err.message || "Erro interno do servidor.";

  // Erro de validação do Mongoose
  if (err.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(err.errors).map((e) => e.message).join(", ");
  }

  // ID inválido do MongoDB
  if (err.name === "CastError") {
    statusCode = 400;
    message = "ID inválido.";
  }

  // Email duplicado
  if (err.code === 11000) {
    statusCode = 400;
    message = "Email já cadastrado.";
  }

  res.status(statusCode).json({ success: false, message });
};

module.exports = { notFound, errorHandler };

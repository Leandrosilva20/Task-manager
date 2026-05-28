const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Título é obrigatório"],
      trim: true,
      maxlength: [100, "Título deve ter no máximo 100 caracteres"],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, "Descrição deve ter no máximo 500 caracteres"],
      default: "",
    },
    status: {
      type: String,
      enum: {
        values: ["pendente", "em andamento", "concluída"],
        message: "Status inválido. Use: pendente, em andamento ou concluída",
      },
      default: "pendente",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);

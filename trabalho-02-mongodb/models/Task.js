
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  título: {
    type: String,
    required: [true, "O título é obrigatório"],
    trim: true,
    maxlength: [100, "Máximo 100 caracteres"]
  },
  descrição: {
    type: String,
    trim: true,
    default: ""
  },
  status: {
    type: String,
    enum: ["pendente", "em andamento", "concluída"],
    default: "pendente"
  }
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);

const mongoose = require("mongoose");

const esquema = new mongoose.Schema({
  título: {
    type: String,
    required: [true, "Título é obrigatório"],
    trim: true,
    maxlength: 100
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

module.exports = mongoose.model("Task", esquema);

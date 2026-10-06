const mongoose = require("mongoose");

const conectar = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/task-manager");
    console.log("✅ MongoDB conectado!");
  } catch (erro) {
    console.error("❌ Erro ao conectar:", erro.message);
    process.exit(1);
  }
};

module.exports = conectar;

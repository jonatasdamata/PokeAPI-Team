import mongoose from "mongoose";

// Integração com o Banco de Dados MongoDB
// Criando o team
const teamSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  team: {
    type: [String],
    required: true,
  },
});

export default mongoose.model("Team", teamSchema);

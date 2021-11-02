const mongoose = require("mongoose");

const dadosClientes = new mongoose.Schema({
  numeroCliente: {
    type: Number,
    required: [true, "A client needs a number"],
  },
  nomeCliente: {
    type: String,
    required: [true, "A client needs a name"],
  },
  usinas: [
    {
      usinaId: {
        type: Number,
        required: [true, "A factory needs a number"],
      },
      percentualDeParticipacao: {
        type: Number,
        required: [true, "A client needs a percentage"],
      },
    },
  ],
});

mongoose.pluralize(null);

const Clientes = mongoose.model("dadosClientes", dadosClientes);

module.exports = Clientes;

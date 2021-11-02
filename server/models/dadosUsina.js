const mongoose = require("mongoose");

const dadosUsina = new mongoose.Schema({
  tempo_h: Number,
  tensao_V: Number,
  corrent_A: Number,
  potencia_kW: Number,
  temperature_C: Number,
});

mongoose.pluralize(null);

const Usina = mongoose.model("dadosUsina", dadosUsina);

module.exports = Usina;

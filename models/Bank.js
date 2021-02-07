var mongoose = require("mongoose");
const bankSchema = new mongoose.Schema({
  name: {
    type: String,
    // ini validasi
    required: true,
  },

  nomorRekening: {
    type: String,
    // ini validasi
    required: true,
  },

  nameBank: {
    type: String,
    // ini validasi
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Bank", bankSchema);

var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const featureSchema = new mongoose.Schema({
  name: {
    type: String,
    // ini validasi
    required: true,
  },

  qty: {
    type: Number,
    // ini validasi
    required: true,
  },

  itemId: {
    type: ObjectId,
    ref: "Item",
  },

  imageUrl: {
    type: String,
    // ini validasi
    required: true,
  },
});

module.exports = mongoose.model("Feature", featureSchema);

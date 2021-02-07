var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    // ini validasi
    required: true,
  },

  itemId: [
    {
      type: ObjectId,
      ref: "Item",
    },
  ],
});

module.exports = mongoose.model("Category", categorySchema);

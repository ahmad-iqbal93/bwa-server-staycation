var mongoose = require("mongoose");
const imageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    // ini validasi
    required: true,
  },
});

module.exports = mongoose.model("Image", imageSchema);

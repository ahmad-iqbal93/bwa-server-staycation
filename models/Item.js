var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    // ini validasi
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  country: {
    type: String,
    default: "Indonesia",
  },

  categoryId: {
    type: ObjectId,
    ref: "Category",
  },

  city: {
    type: String,
    required: true,
  },

  isPopular: {
    type: Boolean,
    default: false,
  },

  description: {
    type: String,
    required: true,
  },

  unit: {
    type: String,
    default: "night",
  },

  sumBooking: {
    type: Number,
    default: 0,
  },

  imageId: [
    {
      type: ObjectId,
      ref: "Image",
    },
  ],

  featureId: [
    {
      type: ObjectId,
      ref: "Feature",
    },
  ],

  activityId: [
    {
      type: ObjectId,
      ref: "Activity",
    },
  ],
});

module.exports = mongoose.model("Item", itemSchema);

const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
      unique: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Img: {
      type: String,
      required: true,
    },
    Categories: {
      type: Array,
    },
    Price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
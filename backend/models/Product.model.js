const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const productSchema = new Schema({
  model: String,
  carrier: String,
  price: Number,
  storage: String,
  category:String
});

module.exports = model("Product", productSchema);

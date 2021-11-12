const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const orderNumberSchema = new Schema({
    orderNumbers: String,
});

module.exports = model("OrderNumber", orderNumberSchema);

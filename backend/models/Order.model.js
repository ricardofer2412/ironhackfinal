const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const orderSchema = new Schema({
    product: Object,
    vendor: Object,
    orderNumber: Number,
    orderDate: Date,
    paymentDate: Date,
    paymentMethod: String,
    orderStatus: String,
});

module.exports = model("Order", orderSchema);

const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const vendorSchema = new Schema({
    name: String,
    email: String,
    phoneNumber: Number,
    address: String,
    address2: String,
    city: String,
    zipcode: Number,
    state:String,
});

module.exports = model("Vendor", vendorSchema);

const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
    },
    password: String,
    role: String,
    userImg: String,
    firstName: String,
    lastName: String,
    active: Boolean,
    userEmail: String,
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;

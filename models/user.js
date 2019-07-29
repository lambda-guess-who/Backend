const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  auth: {
    username: { type: String, required: true },
    password: { type: String, required: true }
  }
});
exports.User = mongoose.model("User", User);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const candidateObject = new Schema({
  handle: { type: String, required: true },
  id: { type: Number, required: true }
});
exports.candidateObject = mongoose.model("candidateObject", candidateObject);

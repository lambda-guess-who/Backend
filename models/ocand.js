const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Ocand = new Schema({
  handle: { type: String, required: true },
  id: { type: Object, required: true }
});
exports.Ocand = mongoose.model("Ocand", Ocand);

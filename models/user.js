const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  auth: {
    username: { type: String, required: true },
    password: { type: String, required: true }
  },
  playerData: {
    highscore: { type: Number }, // 0 NUM
    achievementid: { type: Array } // 0 NUM - array
  },
  settings: {
    subscription: { type: Boolean } // true / false
  }
});
exports.User = mongoose.model("User", User);

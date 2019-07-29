const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const auth = require("./routes/auth");
const app = express();
const PORT = process.env.PORT || 3001;
const PASS = process.env.PASS;
app.use(express.json());
app.use(cors());
app.use("/api/auth", auth);

mongoose
  .connect(
    `mongodb+srv://admin:${PASS}@guesswho-faq0g.mongodb.net/test?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .then(data => {
    console.log("CONNECTED TO MONGODB");
  });
app.listen(PORT, function() {
  console.log(`CONNECT TO PORT ${PORT}`);
});

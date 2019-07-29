const express = require("express");
const router = express.Router();
const { authenticate } = require("../middleware/authenticate");

router.get("/", (req, res) => {
  res
    .status(200)
    .json(
      "Welcome to GUESS WHO. Find the README.md to start making requests! // do /amIAuthed to see if your jwt token is valid"
    );
});
router.get("/amIAuthed", authenticate, (req, res) => {
  res.status(200).json("Congrats you are authed!");
});

module.exports = router;

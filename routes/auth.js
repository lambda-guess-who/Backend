const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
router.get("/", (req, res) => {
  res.status(200).json("ITS ALIVEEEE");
});
router.post("/register", register);
router.post("/login", login);

async function login(req, res) {
  let { username, password } = req.body;
  let user = await User.find({ "auth.username": username });

  for (let i = 0; i < user.length; i++) {
    console.log(user[i].auth.password);
    if (user && bcrypt.compareSync(password, user[i].auth.password)) {
      let token = jwt.sign({ sub: user._id }, secret);
      return res.status(200).json({ token });
    }
  }
}

function register(req, res) {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(req.body.password, salt);
  let user = new User({
    auth: {
      username: req.body.username,
      password: hash
    }
  });
  user
    .save()
    .then(() => {
      res.status(200).json(`Thank you for joining us ${req.body.username}`);
    })
    .catch(error => {
      res.status(500).json(error);
    });
}
module.exports = router;

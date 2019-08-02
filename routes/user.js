const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
const { authenticate } = require("../middleware/authenticate");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
router.get("/:id", authenticate, async (req, res) => {
  let { id } = req.params;
  try {
    let user = await User.findById(id);
    let token = jwt.sign(
      {
        user: {
          id: user._id,
          name: user.auth.username,
          data: user.playerData,
          settings: user.settings
        }
      },
      secret,
      { expiresIn: "1d" }
    );
    return res.status(200).json({ token });
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.put("/highscore/:id", authenticate, async (req, res) => {
  let { id } = req.params;
  try {
    let user = await User.findByIdAndUpdate(
      id,
      {
        "playerData.highscore": req.body.highscore
      },
      { new: true }
    );
    console.log(user);
    return res.status(204).json("updated");
  } catch (e) {
    return res.status(500).json(e.message);
  }
});
router.get("/highscore/:id", authenticate, async (req, res) => {
  let { id } = req.params;
  try {
    let user = await User.findById(id);
    console.log(user);
    return res.status(200).json(user.playerData.highscore);
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

module.exports = router;

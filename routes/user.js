const express = require("express");
const router = express.Router();
const { User } = require("../models/user");

router.put("/highscore/:id", async (req, res) => {
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

module.exports = router;

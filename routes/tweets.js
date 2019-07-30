const express = require("express");
const router = express.Router();
const { Tweet } = require("../models/tweet");

const { authenticate } = require("../middleware/authenticate");
const secret = process.env.JWT_SECRET;

router.get("/", authenticate, async (req, res) => {
  let tweets = await Tweet.find();
  res.status(200).json(tweets);
});
router.get("/:id", authenticate, async (req, res) => {
  let { id } = req.params;
  let tweets = await Tweet.find({ id }).sort("created_at");
  res.status(200).json(tweets);
});
router.post("/", authenticate, async (req, res) => {
  let tweetOBJ = req.body;
  let tweet = new Tweet({ tweetOBJ });
  res.status(201).json(tweet);
});
router.delete("/:id", authenticate, async (req, res) => {
  let { id } = req.params;
  let tweets = await Tweet.FindByIdandRemove(id);
  res.status(204);
});

module.exports = router;

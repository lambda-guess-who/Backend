const express = require("express");
const router = express.Router();
const { Tweet } = require("../models/tweet");

const { authenticate } = require("../middleware/authenticate");
const secret = process.env.JWT_SECRET;

router.get("/", authenticate, async (req, res) => {
  try {
    let tweets = await Tweet.find();
    res.status(200).json(tweets);
  } catch (e) {
    res.status(500).json(e.message);
  } finally {
  }
});
router.get("/:id", authenticate, async (req, res) => {
  try {
    let { id } = req.params;
    id = parseInt(id);
    let tweets = await Tweet.find({ id });
    res.status(200).json({ tweets, id });
  } catch (e) {
    res.status(500).json(e.message);
  }
});
router.post("/", authenticate, async (req, res) => {
  try {
    let tweetOBJ = req.body;
    let tweet = new Tweet({ tweetOBJ });
    res.status(201).json(tweet);
  } catch (e) {
    res.status(500).json(e.message);
  } finally {
  }
});
router.delete("/:id", authenticate, async (req, res) => {
  try {
    let { id } = req.params;
    let tweets = await Tweet.FindByIdandRemove(id);
    res.status(204);
  } catch (e) {
    res.status(500).json(e.message);
  } finally {
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const { Tweet } = require("../models/tweet");
const { Ocand } = require("../models/ocand");
const { authenticate } = require("../middleware/authenticate");
const secret = process.env.JWT_SECRET;

router.get("/", authenticate, async (req, res) => {
  try {
    let cand = await Ocand.find();
    let rand = [];
    let max = cand.length;

    while (rand.length < 3) {
      let candToAdd = getRandomInt(max - 1);
      if (!rand.includes(candToAdd)) {
        rand.push(candToAdd);
      }
    }

    let candidateRand = getRandomInt(3);
    let tweets = await Tweet.find({
      "user.screen_name": cand[rand[candidateRand]].handle
    });

    max = tweets.length;
    let questionInt = getRandomInt(max - 1);
    console.log(tweets[questionInt]);
    let question = {
      question: tweets[questionInt].full_text,
      answer: tweets[questionInt].user,
      candidates: [cand[rand[0]], cand[rand[1]], cand[rand[2]]]
    };

    res.status(200).json(question);
  } catch (e) {
    res.status(500).json(e.message);
  } finally {
  }
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
module.exports = router;

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

    console.log(`max`, max);
    while (rand.length < 3) {
      let candToAdd = getRandomInt(max - 1);
      if (!rand.includes(candToAdd)) {
        rand.push(candToAdd);
      }
    }
    console.log(`random candis `, rand.length);
    let candidateRand = getRandomInt(3);
    console.log(`cand rand handle`, cand[rand[candidateRand]].handle);
    let tweets = await Tweet.find({
      "user.screen_name": cand[rand[candidateRand]].handle,
      full_text: { $exists: true }
    });

    max = tweets.length;
    let questionInt = getRandomInt(max - 1);

    let questionKey = "";
    if (tweets[questionInt].full_text) {
      questionKey = tweets[questionInt].full_text;
    } else {
      questionKey = tweets[0].full_text;
    }
    console.log(tweets[questionInt].full_text);
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

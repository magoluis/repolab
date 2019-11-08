const express = require('express');
const router = express.Router();
const tweetController = require("../controllers/tweet_controller");

router.get("/", tweetController.get);
router.get("/getTweet/:idUser", tweetController.getOne);
router.post("/", tweetController.insert);

module.exports = router;
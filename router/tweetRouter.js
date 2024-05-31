const express = require('express');
const { tweetUpload, updateTweet } = require('../controller/tweetController');
const tokenValidation = require('../middleware/tokenValidation');

const tweet = express.Router();

tweet.post('/', tokenValidation, tweetUpload);
tweet.put('/:id', tokenValidation, updateTweet);

module.exports = tweet;

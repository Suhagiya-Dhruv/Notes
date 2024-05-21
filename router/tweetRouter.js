const express = require('express');
const { tweetUpload } = require('../controller/tweetController');
const tokenValidation = require('../middleware/tokenValidation');

const tweet = express.Router();

tweet.post('/', tokenValidation, tweetUpload);

module.exports = tweet;

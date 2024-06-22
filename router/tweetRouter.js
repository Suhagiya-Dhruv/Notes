const express = require('express');
const { tweetUpload, updateTweet, fileView } = require('../controller/tweetController');
const tokenValidation = require('../middleware/tokenValidation');

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./upload");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.fieldname + ".png");
    },
});

const upload = multer({ storage: storage });

const tweet = express.Router();

tweet.post('/', tokenValidation, upload.single('file'), tweetUpload);
tweet.put('/:id', tokenValidation, updateTweet);
tweet.get('/:file', fileView);

module.exports = tweet;

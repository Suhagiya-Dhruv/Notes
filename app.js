const express = require('express');
const mongoose = require('mongoose');
const userRegister = require('./router/userRegister');
const tweet = require('./router/tweetRouter');

const url = "mongodb://localhost:27017/twitter";

mongoose.connect(url)
    .then(() => console.log("DataBase connected"))
    .catch((err) => console.error(err))


const server = express();

server.use(express.json()) // Middleware use for body read

server.use("/user-register", userRegister)
server.use("/tweet", tweet)

const port = 3000;
server.listen(port, () => console.log("Server listening on port " + port));
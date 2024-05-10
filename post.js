const express = require('express');
const mongoose = require('mongoose');
const Testing = require('./model');
const bcrypt = require('bcrypt');

const url = "mongodb://localhost:27017/testing";

mongoose.connect(url)
    .then(() => console.log("DataBase connected"))
    .catch((err) => console.error(err))


const server = express();

// Middleware

server.use(express.json())

// server.use((req, res, cb) => {
//     console.log("API Hit 1")
//     cb();
// });

// server.use((req, res, cb) => {
//     console.log("Middleware 2")
//     res.send("User is not valid")
//     cb();
// });


const data = [];

server.post("/", (req, res) => {
    res.send("This is first POST APIs")
});


server.post("/create", async (req, res) => { // Error handling

    try {

        const email = await Testing.findOne({ email: req.body.email });

        if (email) { // null
            return res.send({
                data: email,
                message: "Email already extis..!"
            })
        }

        const password = await bcrypt.hash("123456", 10);

        const data = await Testing.create({ ...req.body, password })
        res.send(data)

    } catch (e) {
        res.send(e)
    }
    // data.push(req.body)
});


server.delete("/delete/:id", async (req, res) => {

    const id = req.params.id;

    // const data = await Testing.deleteOne({ email })
    const data = await Testing.findByIdAndDelete(id)
    res.send(data);
})


server.listen(5555, () => {
    console.log('Server is running on port');
})
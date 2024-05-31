const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {

        const newEmail = req.body.map(item => item.email); // ["emailId", "emailId"]

        const email = await userModel.find({
            email: {
                $in: newEmail
            }
        }) // query

        console.log(email.length) // []

        if (email.length) {
            return res.send({
                data: null,
                message: "Email already extis..!",
                status: false
            })
        }


        const dataModify = req.body.map(async (value) => {
            const password = await bcrypt.hash(value.password, 10);
            return ({
                ...value,
                password
            })
        })

        const promiseData = Promise.all(dataModify).then(data => data).catch(err => console.error(err));

        const data = await userModel.insertMany(await promiseData)

        return res.send({
            data: data,
            message: "User created successfully..!",
            status: true
        })

    } catch (e) {
        return res.send({
            data: null,
            message: "Something went wrong..!",
            status: false
        })
    }
}

const dataFetch = async (req, res) => {
    try {
        // first bracket meand filter the data and second bracket is filter the fields               
        const data = await userModel.find({}, { password: 0, _id: 0 }).sort({ name: 1 });
        return res.send({
            data: data,
            message: "Data fetched successfully..!",
            status: true
        })
    } catch (error) {
        return res.send({
            data: null,
            message: "Something went wrong..!",
            status: false
        })
    }
}

const detelteAll = async (req, res) => {
    try {
        const data = await userModel.deleteMany();
        return res.send({
            data: null,
            message: "All Data deleted successfully",
            status: true
        })
    } catch (err) {
        return res.send({
            data: null,
            message: "Something went wrong..!",
            status: false
        })
    }
}


const login = async (req, res) => {
    const data = await userModel.findOne({ email: req.body.email });

    if (!data) {
        return res.send({
            message: "user not found",
            data: null,
            status: false
        })
    }

    const matchPassword = await bcrypt.compare(req.body.password, data.password);

    if (matchPassword) {
        const toeken = jwt.sign({ _id: data._id, name: data.name, email: data.email }, 'screct_key');

        return res.send({
            message: "Login successfully",
            data: toeken,
            status: true
        })
    }

    return res.send({
        message: "Invalid Password",
        data: null,
        status: false
    })

}

module.exports = {
    signup,
    dataFetch,
    detelteAll,
    login
}
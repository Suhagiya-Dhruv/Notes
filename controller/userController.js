const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
    try {

        const email = await userModel.findOne({ email: req.body.email });

        if (email) {
            return res.send({
                data: null,
                message: "Email already extis..!",
                status: false
            })
        }

        const password = await bcrypt.hash("123456", 10);

        const data = await userModel.create({ ...req.body, password })
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

module.exports = {
    signup,
    dataFetch,
    detelteAll
}
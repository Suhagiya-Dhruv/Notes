const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");

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

var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2dc3df5e29be14",
      pass: "6168cb7e52d573"
    }
  });

async function main(email, newP) {

    const info = await transport.sendMail({
        from: 'service@uncleblock.in', // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Password</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <div style="text-align: center; padding-bottom: 20px;">
            <h1 style="margin: 0; font-size: 24px; color: #333333;">Reset Your Password</h1>
        </div>
        <div style="font-size: 16px; color: #333333; line-height: 1.5;">
            <p>Hello [User's Name],</p>
            <p>We received a request to reset your password. Click the button below to reset it:</p>
            <div style="text-align: center; margin: 20px 0;">
                <a href="[Reset Password Link]" style="background-color: #007bff; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">${newP}</a>
            </div>
            <p>If you did not request a password reset, please ignore this email or contact support if you have questions.</p>
            <p>Thank you,<br/>The [Your Company] Team</p>
        </div>
        <div style="text-align: center; font-size: 12px; color: #999999; margin-top: 20px;">
            <p>If you’re having trouble clicking the "Reset Password" button, copy and paste the URL below into your web browser: <a href="[Reset Password Link]" style="color: #007bff;">[Reset Password Link]</a></p>
        </div>
    </div>
</body>
</html>
`, // html body
    });

}


const forgotPassword = async (req, res) => {

    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
        return res.send({
            message: "User not found",
            data: null,
            status: false
        })
    }

    const passwordGenerator = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz._@$%#";

    let newP = "";

    for (let i = 0; i < 6; i++) {
        newP = newP + passwordGenerator.charAt(Math.random() * passwordGenerator.length)
    }

    const newHashPassword = await bcrypt.hash(newP, 10);

    user.password = newHashPassword

    await user.save();


    main(req.body.email, newP).catch(console.error);

    res.send("Mail Send")
}

const resetPassword = async (req, res) => {
    const id = req.user._id;

    const user = await userModel.findOne({ _id: id })

    const { oldPassword, newPassword } = req.body;

    const matchPassword = await bcrypt.compare(oldPassword, user.password);

    if (!matchPassword) {
        return res.send({
            message: "Invalid Password",
            data: null,
            status: false
        })
    }

    const newHashPassword = await bcrypt.hash(newPassword, 10);

    user.password = newHashPassword

    await user.save();

    res.send({
        message: "Password reset successfully",
        data: null,
        status: true
    })
}
module.exports = {
    signup,
    dataFetch,
    detelteAll,
    login,
    forgotPassword,
    resetPassword
}
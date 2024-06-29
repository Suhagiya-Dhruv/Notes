const express = require('express');
const { signup, dataFetch, detelteAll, login, forgotPassword, resetPassword } = require('../controller/userController');
const tokenValidation = require('../middleware/tokenValidation');

const userRegister = express.Router();

userRegister.get('/', dataFetch);
userRegister.post('/', signup);
userRegister.post('/login', login);
userRegister.delete('/', detelteAll);
userRegister.post("/forgot", forgotPassword)
userRegister.post("/reset", tokenValidation, resetPassword)

module.exports = userRegister;

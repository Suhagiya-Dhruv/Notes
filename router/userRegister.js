const express = require('express');
const { signup, dataFetch, detelteAll, login } = require('../controller/userController');

const userRegister = express.Router();

userRegister.get('/', dataFetch);
userRegister.post('/', signup);
userRegister.post('/login', login);
userRegister.delete('/', detelteAll);

module.exports = userRegister;

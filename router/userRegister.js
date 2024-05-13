const express = require('express');
const { signup, dataFetch, detelteAll } = require('../controller/userController');

const userRegister = express.Router();

userRegister.get('/', dataFetch);
userRegister.post('/', signup);
userRegister.delete('/', detelteAll);

module.exports = userRegister;

1. npm init -y
2. Create a server file
3. install express -> npm i express
4. import -> require


const server = require('express');

const app = server();

app.listen(5555, () => {
    console.log('listening on port');
})

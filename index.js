const express = require('express');
const fs = require('fs');
const server = express();

/*

CURD Opration

C - Create 
U - Update
R - Read
D - Delete

API Methods

1. GET - Read
2. POST - Create
3. PUT/PATCH - Update
4. DELETE - Delete

*/

// API HIT -> API Call


// http://localhost:5555  -> Domain -> http://chrome.com/  -> API Link

// http://localhost:5555/products  -> Domain -> http://chrome.com/  -> API Link -> END point /products
// http://localhost:5555/users  -> Domain -> http://chrome.com/  -> API Link -> End Point /users
// http://localhost:5555/carts  -> Domain -> http://chrome.com/  -> API Link -> End Point /carts

server.get('/products', (req, res) => {

    const data = fs.readFileSync('product.json');
    res.send(JSON.parse(data))

})


server.get('/products/:id', (req, res) => {

    const id = Number(req.params.id);

    const data = JSON.parse(fs.readFileSync('product.json'));

    const response = data.filter(item => item.id === id);

    if (response.length) {
        res.send(response)
    } else {
        res.send("Data not found")
    }
})


server.get('/e1', (req, res) => {

    console.log(req.query)

    const age = req.query.age;
    const value = req.query.value;

    const data = JSON.parse(fs.readFileSync('empoyerdata.json'));


    let response = data;
    if (value === 'gt') {
        response = data.filter(item => item.age >= age); //block scope
    } else if (value === 'lt') {
        response = data.filter(item => item.age < age);
    }

    if (response.length) {
        res.send(response)
    } else {
        res.send("Data not found")
    }
})

// server.get('/e1/:id/:name',(req, res)=>{

//     console.log(req.params)
//     res.send("E1 API") 
// })

// server.get('/e1/:id/:name/:surname',(req, res)=>{

//     console.log(req.params)
//     res.send("E1 API") 
// })

server.listen(5556, () => {
    console.log('Server is running on port http://localhost:5556');
})

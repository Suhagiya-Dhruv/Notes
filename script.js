// File System in node js

// How to read file synchronus and asynchronus

const fs = require('fs');

// console.log(fs.readFileSync("../textfile/name.txt", 'utf-8'));
// console.log(fs.readFileSync("name1.txt", 'utf-8'));

// console.log(__dirname)
// console.log(__filename)

// fs.writeFileSync("name.txt" , "Hello");

// fs.appendFileSync("name.txt", "\nWorld")

// fs.unlinkSync("name.txt")

fs.readFile("name.txt", 'utf-8' , (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data);
});

fs.writeFile("name.txt", 'World' , (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data);
});

fs.appendFile("name.txt", ' World' , (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data);
});

fs.unlink("name.txt",(err, data)=>{
    if(err){
        console.log(err);
    }
    console.log(data)
})



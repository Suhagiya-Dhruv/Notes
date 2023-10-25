// Closures

// function outer(){ // issue
//     const a = 10;
// }

// console.log()

// function outer(){
//     let a = 15;
//     return function inner(){
//         a++;
//         return a;
//     }
// }

// const a = outer();
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());

// Truthy Value vs. Falsy Value

// const a = [];

// if(0){
//     console.log("Falsy")
// }

// if(1){
//     console.log("Truthy")
// }

// if (true) {
//     console.log("Truthy")
// }

// if (false) {
//     console.log("Falsy")
// }

// if ("") { // empty string
//     console.log("Falsy")
// }

// if (" ") {
//     console.log("Truthy")
// }

// if ([]) {
//     console.log("Truthy")
// }

// if ({}) {
//     console.log("Truthy")
// }

// if(null){
//     console.log("Falsy")
// }

// if(undefined){
//     console.log("Falsy")
// }

// if(NaN){ // not a number
//     console.log("Falsy")
// }


// console.log(+"a");

// == vs ===

// const a = 10; // type number
// const b = "10"; // type string

// if(a==b){ // check only value
//     console.log("==");
// }

// if(a===b){ // check value and type both
//     console.log("===");
// }

// Object Methods:
// 1. preventExtensions
// 2. seal
// 3. freeze

const a = {
    fname: "Bob",
    city: "US",
    concat: {
        mobile: "123456790",
        phone: "025548"
    }
}

// Object.preventExtensions(a);
// Object.seal(a);
// Object.freeze(a);

// a.lname = "Hey";
// a.fname = "Hey";
// delete a.city;

a.concat.lname = "Hey"
a.concat.mobile = "987654";
delete a.concat.phone;

console.log(a);



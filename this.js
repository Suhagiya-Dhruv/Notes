// var a = 15;
// console.log(window.a);
// console.log(this.a);

// console.log(window);
// console.log(this);


// let a = 15;
// console.log(this.a); 

// const a = 20;
// console.log(window.a);

// const a = { // object
//     name:"Tommy",
//     sayHi:function (){
//         console.log("Tommy say Hi");
//     }
// }

// a.sayHi(); // method call

// var b = a.sayHi;

// b(); // function call

// var firstName = "Pluto"
// const a = { // object
//     firstName:"Tommy",
//     sayHi:function (){
//         console.log(`${this.firstName} say Hi`);
//     }
// }

// a.sayHi(); // method call => Representing the current object

// var b = a.sayHi;

// b(); // function call => Representing the window/globle object


// function a(a,b){
//     return a+b;
// }

// console.log(a(1,5)); // 6



// var b = (a,b) => {
//    return a+b;
//    return a-b;
// }

// console.log(b(1,5))

// var firstName = "Tommy";
// let dog = {
//     firstName: "Pluto",
//     sayHi: function () {
//         console.log(`${this.firstName} says hi `);
//     }
// }

// dog.sayHi(); // method call -> current object
// let greet = dog.sayHi;
// greet() // funciton call -> window object

// var firstName="Tommy";
// let dog={
//     firstName:"Pluto",
//     sayHi:function(){
//         console.log(`${this.firstName} says hi `);
//         function inner(){
//             console.log(`${this.firstName} says hi `);
//         }
//         inner() // function call
//     }
// }

// dog.sayHi(); // method call

// var a = "name";

// const inner = () => {
//     console.log(`${this.a} says hi `);
// }
// inner() // funciton call


// let dog = {
//     firstName: "Pluto",
//     sayHi: function () {
//         console.log(`${this.firstName} says hi `);
//         const inner = () => {
//             console.log(`${this.firstName} says hi `);
//         }
//         inner() // funciton call
//     }
// }

// dog.sayHi(); // method call


// let dog = {
//     firstName: "Pluto",
//     arrowSayHi: () => {
//         console.log(`${this.firstName} says hi `)
//         const inner = () => {
//             console.log(`${this.firstName} says hi `)
//         }
//         inner()
//     }
// }

// dog.arrowSayHi();

// let dog = {
//     firstName: "Pluto",
//     sayHi: function () {
//         console.log(`${this.firstName} says hi `);
//         const subInner = () => {
//             console.log(this.firstName);

//             const inner = () => {
//                 console.log(`${this.firstName} says hi `);
//             }
//             inner()
//         }
//         subInner()
//     }
// }

// dog.sayHi();

// sayHi -> dog
// subInner -> sayHi 
// innner -> subInner



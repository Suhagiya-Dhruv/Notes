// const a = {
//     firstName: "John",
//     callFn() { // private
//         console.log("Hello, my name is " + this.firstName);
//     }
// }

// a.callFn();

// var b = new Object(); // {}
// const c = [] // new Object() 

// b.callFn();


// console.log(b); // 
// console.log(c); // 


function Dog() { // Constructor
    // console.log("Hello ", this.firstName)
}

Dog.prototype.sayHi = function () {
    console.log("Hello ", this.firstName)
}


const b = new Dog();

console.log(b.sayHi());
// console.log(c);
// console.log(d);
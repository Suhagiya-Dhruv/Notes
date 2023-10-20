// const a1 = {
//     firstName: "John",
//     sayHi() {
//         console.log(`${this.firstName} say hi`)
//     }
// }

// const a2 = {
//     firstName: "Bob",
//     sayHi() {
//         console.log(`${this.firstName} say hi`)
//     }
// }

// a1.sayHi();
// a2.sayHi();

// function sayHi(offer, discount){
//     console.log(`${this.firstName} welcome my company ${offer} ${discount}% discount` );
// }

// const a1={
//     firstName: "John",
// }

// const a2 = {
//     firstName: "Bob",
// }

// const a = [a1,a2];

// console.log(a)
// for()

// for(let i=0;i<a.length;i++){
    //     sayHi.call(a[i]);
    // }
    
// call
// sayHi.call(a1,"Diwali offer", 50)
// sayHi.call(a2,"Diwali offer", 20);

// apply

// sayHi.apply(a1,["Diwali offer", 50]);
// sayHi.apply(a2,["Diwali offer", 20]);

// bind

// const b = sayHi.bind(a1,"Diwali offer", 50);
// b();
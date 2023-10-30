// const a = {
//     fname: "Bob",
//     lname: "John",
//     address: {
//         city: "US",
//         tel_number: "025891"
//     }
// }

// console.log(a.fname) // Bob

// const b = Object.keys(a); // return new array with keys
// console.log(b)

// const b = Object.values(a); // return new array with values
// console.log(b)

// const b = Object.keys(a); // keys

// [1,2,3,4,5].forEach((a)=>{
//     console.log(a*5)
// })

// console.log(b);

// b.forEach(function (c) {
//     console.log(c, " -> ", a[c]) // fname -> Bob
// }) 


// setTimeout
// function cb2() {
//     console.log("two");
// }

// function cb4() {
//     console.log("four");
// }

// function cb5() {
//     console.log("five");
// }

// console.log("one");

// setTimeout(cb2, 5000) // function, time->milisecond 
// // 1sec ->  1000ms
// setTimeout(cb4, 2000) // function, time->milisecond 
// setTimeout(cb5, 1000) // function, time->milisecond 

// console.log("three");

// one -> 0
// three -> 0
// five -> 1 sec
// four -> 2 sec
// two -> 5 sec

// 8 sec


// const a = setTimeout(()=>{
//     console.log("Print 1")
// },3000)


// const b = setTimeout(()=>{
//     console.log("Print 2")
//     clearTimeout(a)
// },2000)


// setInterval

// let count = 0;

// const id = setInterval(()=>{
//     console.log(count); // 9
//     count++; // 10
//     if(count === 10){
//         clearInterval(id)
//     }
// },1000);





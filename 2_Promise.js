/*

1. fulfilled
2. rejected
3. pending

*/

// const a = new Promise((resolve, reject)=>{

// });

// const b = new Promise((res, rej)=>{
//     res("Resolved")
// });

// const c = new Promise((res, rej)=>{
//     rej("Rejected")
// });

// console.log(a);
// console.log(b);
// console.log(c);


// const b = new Promise((res, rej) => {
// setTimeout(()=>{
//     rej("Internet issue");
//     res([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// },1000)
// });

// b.then((data) => console.log(data))
//     .catch((err) => console.log(err))


// const a = new Promise((res, rej) => {
//     res("value");
// })

// console.log(a)

// a.then(function (data) {
//     return data;
// })

// a.then(data => data);

// console.log(a)


// function run(value){
//     return value*5;
// }

// const run = (value) => value * 5;

// console.log(run(5))


// const data = fetch(`https://jsonplaceholder.typicode.com/todos`); // API call 
// const value = data.then((a) => a.json());

// value.then(value => console.log(value));


// Synchronous vs  Asynchronous

// function run() {
//     setTimeout(() => {
//         return 5
//     }, 1000);
// }

// const a = run();
// console.log(a);


// function wait() {
//     const a = new Promise((res, rej) => {
//         setTimeout(() => {
//             res(5);
//         }, 2000)
//     })
//     return a;
// }

// async/await

// async function run() { // Asynchronous function
//     const a = await wait();
//     console.log(a);
// }

// run();

// HTML DOM

// NPM // Node package manager

// React JS -> Front-End -> UI
// Node JS/Express JS -> Back-end API 
// MySQL -> Query -> Date Base
// MongoDB ->  Query Data Base





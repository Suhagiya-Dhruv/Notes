// // const value = 15;

// const a = {
//     value: 0, // direct not change
//     inc: function () {
//         this.value++;
//     },
//     dec() {
//         this.value--;
//     },
//     showValue() {
//         return this.value;
//     }
// }

// // a.value++;

// // a.value = 5

// a.inc();
// a.inc();
// a.inc();
// a.inc();
// a.inc();

// console.log(a.showValue()) // 5


// Reference
// const a ={
//     value:5
// }

// const b =a;

// b.value = 10;

// console.log(a)

// const a = {
//     value: 0, // direct not change
//     inc: function () {
//         this.value++;
//         return this;
//     },
//     dec() {
//         this.value--;
//         return this;
//     },
//     showValue() {
//         return this.value;
//     }
// }

// a.inc().inc().inc().inc().inc(); // object


// console.log(a.showValue()) // 5



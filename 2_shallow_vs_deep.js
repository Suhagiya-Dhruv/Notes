// shallow copy

// const a = {
//     fname: "bob",
//     lname: "jain",
//     address: {
//         city: "us",
//         pincode: 362563
//     },
//     marks: {
//         math: 20,
//         physics: 30
//     },
//     school: "aashdip"
// }

// const b = a;

// b.fname = "john"

// console.log(a.fname)
// console.log(b.fname)

// const a = [1,2,3,4,5];
// const b = a;

// b[2] = 6; // 2 index change value

// console.log(a); // [1,2,6,4,5]
// console.log(b); // [1,2,6,4,5]


// const a = [1, 2, 3, 4, 5, 6, 7, 8];
// const b = [...a]; // new array => 1, 2, 3, 4, 5, 6, 7, 8

// b[2] = 6;

// console.log(a); // [1,2,3,4,5,6,7,8]
// console.log(b); // [1,2,6,4,5,6,7,8]

// const a = [1, 2, [3, 4, 5, 6], 7, 8];

// 0 -> 1
// 1 -> 2
// 2 -> [3, 4, 5, 6] -> // 0 -> 3
//                   -> // 1 -> 4
//                   -> // 2 -> 5
//                   -> // 3 -> 6
// 3 -> 7
// 4 -> 8


// const a = [1, 2, [3, 4, 5, 6], 7, 8];

// const b = [...a]; // new array => 1, 2, [3, 4, 5, 6], 7, 8

// b[0] = 10;
// b[2][2] = 6;
// b[2] = 6;

// console.log(a); // [1, 2, [3, 4, 5, 6], 7, 8];
// console.log(b); // [1, 2, 6, 7, 8];

// const a = {
//     fname: "bob",
//     lname: "jain",
//     address: {
//         city: "us",
//         pincode: 362563
//     },
//     marks: {
//         math: 20,
//         physics: 30
//     },
//     school: "aashdip"
// }

// const b = {
//     ...a
// };

// delete b.lname;

// console.log(a);
// console.log(b);

// const a = {
//     fname: "bob",
//     lname: "jain",
//     address: {
//         city: "us",
//         pincode: 362563,
//         address: {
//             city: "uk",
//             pincode: 362563,
//         },
//     },
//     marks: {
//         math: 20,
//         physics: 30
//     },
//     school: "aashdip"
// }

// const b = {
//     ...a
// };

// b.address = "NO";

// console.log(a);
// console.log(b);


//******************* deep copy *************************

// const a = {
//     fname: "bob",
//     lname: "jain",
//     address: {
//         city: "us",
//         pincode: 362563,
//         address: {
//             city: "uk",
//             pincode: 362563,
//         },
//     },
//     marks: {
//         math: 20,
//         physics: 30
//     },
//     school: "aashdip"
// }

// String -> Object // 

// const b = JSON.stringify(a);

// const c = JSON.parse(b);



// c.fname = "New name";
// c.address.city = "New city"


// console.log(a)
// console.log(b)
// console.log(c)

// const a = [1, 2, [3, 4, 5, 6], 7, 8];

// const b = JSON.stringify(a);
// const c = JSON.parse(b);

// c[2][2] = 6;

// console.log(a);
// console.log(b); 
// console.log(c); 
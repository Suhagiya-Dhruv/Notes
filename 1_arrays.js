// const a = [1,2,3];
// const b = [4,5,6];

// const c = [...a,...b] // [1,2,3,4,5,6]

// a.push(...b)


// console.log(a);

/*

1. join
2. push
3. pop
4. shift
5. unshift
6. concat
7. slice
8. splice
9. map
10. filter
11. reduce

*/

// ************************* slice ********************


//                0    1     2      3     4       5       6
// const a = ["one","two","three","four","five","six","seven"];

// const b = a.slice(3); // return new array without changing orignal array

// b.push("eight");

// console.log(a);
// console.log(b); // ["four","five","six","seven","eight"]

//           0    1     2      3     4       5       6
// const a = ["one","two","three","four","five","six","seven"];

// const b = a.slice(2,-1);

// console.log(a);
// console.log(b);

// ************************* splice ********************


//   0    1     2      3     4       5       6
// const a = ["one", "two", "three", "four", "five", "six", "seven"];

// const b = a.splice(2); // return new array and change orignal array

// console.log(a);
// console.log(b);

//             0    1     2      3     4       5       6
// const a = ["one", "two", "three", "four", "five", "six", "seven"];

// const b = a.splice(2,1,"eight");

// console.log(a);
// console.log(b);


//           0    1     2      3     4       5       6
// const a = ["one", "two", "five", "six", "seven"];

// const b = a.splice(2,0,"three", "four");

// console.log(a);
// console.log(b);


// const a = [1,2,3,4];
// const b = [5,6,7,8];

// const c = [...a,...b];

// console.log(c)

// ************************* concat ********************

// const a = [1,2,3,4];
// const b = [5,6,7,8];

// const c = b.concat(a); // return new array

// c.push("hello")
// console.log(a)
// console.log(b)
// console.log(c)


// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const b = [];
// for (var i = 0; i < a.length; i++) {
//     b.push(a[i] * 2);
// }

// console.log(a);
// console.log(b);

// ************************* MAP ********************

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const b = a.map(function(value){
//      return value*2;
// })

// b.push(15);

// console.log(a);
// console.log(b);

// *********************** filter **********************

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const b = a.filter(function(value){
//    return value%2 == 0
// }); // new array

// const b = a.filter((value) => value % 2 == 0); // new array

// console.log(b)

// *********************** reduce **********************

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const b = a.reduce(function(total, value){
//     return total + value;
// },5) // return single value

// console.log(b);


// ************************ Flatten ******************


// 2D Array
// 3D Array

// const a =[1,2,3,4,5,6];
// const b =[1,2,3,4,5,6];

// const a = [[1,2,3],[4,5,6]]

// 0 1 2

// 1,2,3  // 0
// 4,5,6  // 1


// console.log(a[1]); 

// const a = [1,2,3,4,5,[6,7,8,[9,[10]]]];

// const b = a.flat(Infinity);

// console.log(a);
// console.log(b);
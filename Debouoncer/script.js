// const input = document.getElementById("input");
// const input2 = document.getElementById("range");

// input.addEventListener("input",inputHandler)

// function inputHandler(event){
//     console.log(event.target.value);
// }

// input2.addEventListener("input",inputHandler2)

// function inputHandler2(event){
//     console.log(event.target.value);
// }

// input.addEventListener("change",inputHandler)

// function inputHandler(event){
//     console.log(event.target.value);
// }

// document.addEventListener("keydown", function(event){
//     console.log("Key Down",event.key)
// })

// document.addEventListener("keyup", function(event){
//     console.log("Key Up",event.key)
// })

// document.addEventListener("keypress", function(event){
//     console.log("Key Press",event.key)
// })


// document.addEventListener("mousedown", function(event){
//     console.log("Mouse Down",event)
// })

// document.addEventListener("mouseup", function(event){
//     console.log("Mouse Up",event.which)
// })


/*

click
dblclick
mousemove
mouseleave
mouseenter
mouseover
input
change
keyup
keydown
keypress
mouseup
mosseDown


resize
scroll
submit
drag
drop


*/

// event capture


// debouncing




// function debounce(fn, delay = 1000) { // function is called before 300ms then remove the previuos event
//     let timeId;
//     return function (...arg) {
//         clearTimeout(timeId);
//         timeId = setTimeout(() => {
//             fn(...arg);
//         }, delay)
//     }
// }

// clouser

const data = document.getElementById("btn");
const user = document.getElementById("user-list");

async function clickHandler() {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos`).then(res => res.json()).then(data => data);
    data.forEach((obj) => {

        const li = document.createElement("li");
        li.innerText = obj.title;

        user.appendChild(li)
    })
}

// const debounceFun = debounce(clickHandler, 300);

data.addEventListener("click", clickHandler);

// debounceFun(); // 0
// debounceFun();
// debounceFun(); // 0
// debounceFun(); // 0


// function outer() {
//     let a = 0;
//     return function inner() {
//         a++;
//         return a;
//     }
// }

// const a = outer();

// console.log(a());
// console.log(a());


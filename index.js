// const aList = document.getElementById("home-link");

// aList.addEventListener("click",changeActivebtn);

// for loop
// 0 -> 1 -> 2 -> 3 -> 4(false)

// function outer() {
//     console.log("outerfunction")
//     changeActivebtn();
// }

// clouser

// function outer(){
//     const a = 15;
//     function inner(){
//             console.log(a);
//     }
//     return inner;
// }

// console.log(outer()())

// callback function -> I will call you later

// console.log(aList)

// function run(a){
//     console.log(a);
// }

// run(["element"])

function changeActivebtn(element) {
    removeClass();
    element.classList.add("active")
}

function removeClass() {
    for (let i = 0; i < aList.length; i++) {
        aList[i].classList.remove("active");
    }
}

const aList = document.getElementsByClassName("link");// []

for (let i = 0; i < aList.length; i++) {
    aList[i].addEventListener("click", function outer() {
        changeActivebtn(aList[i]);
    })
}
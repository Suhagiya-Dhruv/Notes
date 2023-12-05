const star = document.getElementById("star");
const rating = document.getElementById("rating");

star.addEventListener("click", clickStar);
// star.addEventListener("mouseenter", function (event) {
//     console.log("Mouse Enter")
// })

// star.addEventListener("mouseleave",function(){
//     console.log("Mouse Leave")
// })

// star.addEventListener("mousemove",function(){
//     console.log("Mouse Move")
// })

// star.addEventListener("mouseover",function(){
//     console.log("Mouse Over")
// })


// star.addEventListener("mouseout",function(){
//     console.log("Mouse Out")
// })


let rate = 0;
for (let i = 0; i < star.children.length; i++) {
    star.children[i].addEventListener("mouseenter", function (event) {
        const { id } = event.target.dataset;
        fillYellow(id);
    })

    star.children[i].addEventListener("mouseleave", function (event) {
        fillYellow(rate);
    })
}


function clickStar(event) {
    const { id } = event.target.dataset;
    if (id) {
        fillYellow(id);
        rate = id
        rating.innerText = id;
    }
}

function fillYellow(id) {
    removeAll() // remove yellow
    const child = star.children;
    for (let i = 0; i < id; i++) {
        child[i].classList.add("yellow")
    }
}

function removeAll() {
    const child = star.children;
    for (let i = 0; i < star.children.length; i++) {
        child[i].classList.remove("yellow")
    }
}
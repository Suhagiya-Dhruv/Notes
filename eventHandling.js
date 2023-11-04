//Event bubbling

const button = document.getElementById("button");
button.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("Button Clicked", e.currentTarget)
})

const children = document.getElementById("children");
children.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("children Clicked", e.currentTarget)
})

const parent = document.getElementById("parent");
parent.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("parent Clicked", e.currentTarget)
})

document.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("document Clicked", e.currentTarget)
})
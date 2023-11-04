// const mobileMenu = document.getElementById("mobile_menu");
// const menuContainer = document.getElementsByClassName("menu_container")[0] // []

// mobileMenu.addEventListener("click", function () {
//     if (mobileMenu.innerText == "Open") {
//         mobileMenu.innerText = "Close"
//         menuContainer.style.display = "flex"
//     } else {
//         mobileMenu.innerText = "Open"
//         menuContainer.style.display= "none"
//     }
// })

// window.addEventListener("resize", function(){
//     if(window.outerWidth > 500){
//         menuContainer.style.display = "flex"
//     }
// })

const ulMenu = document.getElementById("ul_menu");

ulMenu.addEventListener("click", function (e){
    console.log(e.target)
})

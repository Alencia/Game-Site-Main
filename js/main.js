let button = document.querySelector("button");
let menu = document.querySelector("section");
let bxbx = document.querySelector("i");

button.addEventListener("click", function() {
    menu.style.left = 0;
})
bxbx.addEventListener("click", function() {
    menu.style.left = "-100%";
})
const menuButton = document.querySelector("button");
const navMenu = document.querySelector("nav");
function toggleMenu() {
    navMenu.classList.toggle("hide");
}
menuButton.addEventListener("click", toggleMenu);


function handleResize() {
    if (window.innerWidth > 1000) {
        navMenu.classList.remove("hide");
    }
    else {
        navMenu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

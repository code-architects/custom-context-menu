// Stopping the default context menu

const menuel = document.querySelector(".menu-list");
document.addEventListener('contextmenu', event => {
    event.preventDefault();
    if (event.target.className !== 'menu-item') {
        if (event.pageX >= (window.innerWidth - 250)) {
            menuel.style.left = (event.pageX - 250) + "px";
        } else {
            menuel.style.left = event.pageX + "px";
        }
        menuel.style.top = event.pageY + "px";
        menuel.style.display = "block";
    }
});

document.addEventListener("click", (e) => {
    if(!menuel.contains(e.target)) {
        menuel.style.display = "none"
    }
})
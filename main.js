// Stopping the default context menu

const menuel = document.querySelector(".menu-list");
document.addEventListener('contextmenu', event => {
    event.preventDefault();
    menuel.style.top = event.pageY+"px";
    menuel.style.left = event.pageX+"px";
    menuel.style.display="block";
});

document.addEventListener("click", (e) => {
    if(!menuel.contains(e.target)) {
        menuel.style.display = "none"
    }
})
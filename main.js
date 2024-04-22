/* OPEN/CLOSE MENU */

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", function() {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", function() {
    nav.classList.remove("visible");
})

for (var i = 0; i < 3; i++) {
    document.querySelectorAll(".nav-menu-item") [i].addEventListener("click", function() {
        nav.classList.remove("visible");
    })
}

document.querySelector("main").addEventListener("click", function() {
    nav.classList.remove("visible");
})

document.querySelector(".ig").addEventListener("click", function() {
    nav.classList.remove("visible");
});


/* SCROLL UP MENU */

let ubicacionInicial = window.scrollY;
window.onscroll = function() {
    let desplazamientoActual = window.scrollY; 
    if (ubicacionInicial >= desplazamientoActual) {
        document.querySelector("#header").style.top = "0";
    }
    else {
        document.querySelector("#header").style.top = "-100px";
    }
    ubicacionInicial = desplazamientoActual;
}

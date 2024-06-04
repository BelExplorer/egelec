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


/* GALLERY IMAGE ZOOM - BIG IMG */

const bigImgDiv = document.getElementById("big-img-div");
const bigImg = document.getElementById("big-img");

const imgSelect = document.querySelectorAll(".galeria-img");


for (var i = 0; i < imgSelect.length; i++) {

    imgSelect[i].addEventListener("click", function() {
            bigImgDiv.style.display = "flex";
            const imgSrc = this.src;
            bigImg.src = imgSrc;  
    });  
  }

document.getElementById("cerrar-img").addEventListener("click", function() {
    bigImgDiv.style.display = "none";
})


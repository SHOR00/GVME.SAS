// declaracion de variables

let efectoNavbar = document.querySelector(".navbar");
let enlace = document.querySelectorAll(".enlaceNavbar");
let logoNavbar = document.querySelector(".logoNavbar");

let posicionScroll = 0;
let ticking = false;

// creacion de funciones

// funcion afregar efecto en navbar
function agregarEfecto(scroll_pos) {
  efectoNavbar.classList.add("efecto");
  logoNavbar.src = "img/logo-brand.png";
  enlace.forEach((element) => {
    for (let index = 0; index < enlace.length; index++) {
      element.style.color = "#000000";
    }
  });
}

// funcion quitar efecto en navbar
function quitarEfecto(scroll_pos) {
  efectoNavbar.classList.remove("efecto");
  logoNavbar.src = "img/logo-white.png";
  enlace.forEach((element) => {
    for (let index = 0; index < enlace.length; index++) {
      element.style.color = "#ffffff";
    }
  });
}

// creacion de eventos

// evento para el navbar
window.addEventListener("scroll", function (e) {
  posicionScroll = window.scrollY;
  if (posicionScroll >= 5) {
    window.requestAnimationFrame(function () {
      agregarEfecto(posicionScroll);
      ticking = false;
    });
  }
  if (posicionScroll <= 3) {
    window.requestAnimationFrame(function () {
      quitarEfecto(posicionScroll);
      ticking = false;
    });
  }
});

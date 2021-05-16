document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });

function info () {
  alert("Antivirus Profesional escrito en Python y Node usando technologías web 'Electron'");
}

function social () {
  alert("Esta funcinalidad todavía no esta accesible");
}

function mac () {
  alert("Su equipo no tiene instalada la App Store, no se puede redireccionar");
}

function buscar () {
  var busqueda = prompt("Buscar:");
  if (busqueda === "v4") {
    alert("La versión 4 no está disponible");
  } else if (busqueda === "v5") {
    alert("Descarga la versión 5 en esta página");
  } else {
    alert("No se encintro resultado a tu búsqueda");
  }
}
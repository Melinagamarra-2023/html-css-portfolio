const hamburguesa = document.getElementById("hamburguesa");
const menu = document.getElementById("menu");
const links = document.querySelectorAll("#menu a");

hamburguesa.addEventListener("click", () => {
  menu.classList.toggle("activo");
});

// cerrar menú al hacer click en un link
links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("activo");
  });
});
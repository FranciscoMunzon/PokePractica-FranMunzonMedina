const nav = document.querySelector("nav");
const botonAzul = document.getElementById("water");
const botonRojo = document.getElementById("fire");
const botonAmarillo = document.getElementById("electric");
const botonMostrar = document.getElementById("mostrar");

function cambiarColorAzul() {
    nav.style.backgroundColor = "#2196F3";
}

function cambiarColorRojo() {
    nav.style.backgroundColor = "#F44336";
}

function cambiarColorAmarillo() {
    nav.style.backgroundColor = "#FFEB3B";
}

function mostrarColorOriginal() {
    nav.style.backgroundColor = "";
}

botonAzul.addEventListener("click", cambiarColorAzul);
botonRojo.addEventListener("click", cambiarColorRojo);
botonAmarillo.addEventListener("click", cambiarColorAmarillo);
botonMostrar.addEventListener("click", mostrarColorOriginal);
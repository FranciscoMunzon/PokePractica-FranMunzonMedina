// Ejercicio 1:

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
    nav.style.backgroundColor = "#78C850";
}

botonAzul.addEventListener("click", cambiarColorAzul);
botonRojo.addEventListener("click", cambiarColorRojo);
botonAmarillo.addEventListener("click", cambiarColorAmarillo);
botonMostrar.addEventListener("click", mostrarColorOriginal);

// Ejercicio 2:

const listaPokemon = document.getElementById("listaPokemon");
const divP = document.querySelector(".pokemon-todos");

botonMostrar.addEventListener("click", () => {

divP.innerHTML = "";

fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  .then((response) => response.json())
  .then((data) => {
    const pokemons = [];

    data.results.forEach((pokemon) => {
      fetch(pokemon.url)
        .then((res) => res.json())
        .then((pokeData) => {
          pokemons.push(pokeData);

          if (pokemons.length === 151) {
            pokemons.sort((a, b) => a.id - b.id);
            mostrarPokemons(pokemons);
          }
        });
    });
  });

function mostrarPokemons(lista) {
  lista.forEach((pokeData) => {
    const div = document.createElement("div");
    div.classList.add("pokemon");

    const id = pokeData.id.toString().padStart(3, "0");
    const tipos = pokeData.types
      .map(tipo => `<p class="tipo ${tipo.type.name}">${tipo.type.name}</p>`)
      .join("");
      
    div.innerHTML = `
      <div class="pokemon-imagen">
        <img src="${pokeData.sprites.other["official-artwork"].front_default}" alt="${pokeData.name}">
      </div>
      <div class="pokemon-info">
        <div class="nombre-contenedor">
          <p class="pokemon-id">#${id}</p>
          <h2 class="pokemon-nombre">${pokeData.name}</h2>
        </div>
        <div class="pokemon-tipos">
          ${tipos}
        </div>
      </div>
    `;

    listaPokemon.appendChild(div);
  });
}
});
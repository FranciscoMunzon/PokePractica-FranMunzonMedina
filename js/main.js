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

const buscarInput = document.getElementById("buscarInput");
const buscarBtn = document.getElementById("buscarBtn");


botonMostrar.addEventListener("click", () => {
  
  divP.innerHTML = "";

  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then((data) => {
      const pokemonsTemp = [];

      data.results.forEach((pokemon) => {
        fetch(pokemon.url)
          .then((res) => res.json())
          .then((pokeData) => {
            pokemonsTemp.push(pokeData);

            if (pokemonsTemp.length === 151) {
              pokemonsTemp.sort((a, b) => a.id - b.id);
              guardarPokemon = pokemonsTemp;
              mostrarPokemon(pokemonsTemp);
            }
          });
      });
    });
});

function mostrarPokemon(lista) {
  listaPokemon.innerHTML = "";

  lista.forEach((pokeData) => {
    const div = document.createElement("div");
    div.classList.add("pokemon");

    const id = pokeData.id.toString().padStart(3, "0");
    const tipos = pokeData.types
      .map(
        (tipo) => `<p class="tipo ${tipo.type.name}">${tipo.type.name}</p>`
      )
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

// Ejercicio 3:

buscarBtn.addEventListener("click", () => {
  const texto = buscarInput.value.toLowerCase().trim();

  const filtrados = guardarPokemon.filter((p) =>
    p.name.toLowerCase().equals(texto)
  );

  mostrarPokemon(filtrados);
});

buscarInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    buscarBtn.click();
  }
});
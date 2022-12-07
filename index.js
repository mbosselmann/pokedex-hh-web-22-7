console.clear();

const cardBox = document.querySelector('[data-js="card-box"]');
const url = "https://pokeapi.co/api/v2/pokemon";

async function getPokemon() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      console.log("Fetch is OK!");
      const pokemonData = await response.json();
      console.log(pokemonData.results);
      const pokemonList = pokemonData.results;
      console.log(pokemonList[0].name);
      renderCards(pokemonList);
    } else {
      console.log("Fetch not OK!");
    }
  } catch (error) {
    console.error(error);
  }
}

getPokemon();
function createCard(item) {
  const pokemon = document.createElement("li");
  const pokemonTitle = document.createElement("h2");
  pokemonTitle.textContent = item.name;
  cardBox.append(pokemon);
  pokemon.append(pokemonTitle);
}
function renderCards(pokemonList) {
  pokemonList.forEach((pokemon) => {
    createCard(pokemon);
  });
}

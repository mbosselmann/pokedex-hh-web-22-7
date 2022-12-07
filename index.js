console.clear();

const url = "https://pokeapi.co/api/v2/pokemon";

async function getPokemon() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            console.log("Fetch is OK!");
            const pokemonData = await response.json();
            console.log(pokemonData.results);
        } else {
            console.log("Fetch not OK!");
        }
    } catch(error) {
        console.error(error);
    }
}
getPokemon();
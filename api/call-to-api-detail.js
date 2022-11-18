//Request pokemon
function requestPokemonDetail(pokemonName) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`).then((res) => res.json());
}

export { requestPokemonDetail };

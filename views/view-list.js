import { printPokemonDetail } from "./view-detaill.js";

//Funcion para pintar los pokemons
const print = (pokes) => {
  let pokemons = pokes.results;
  const pokemonSection = document.createElement('section');
  const main = document.querySelector('main');
  main.appendChild(pokemonSection);
  pokemonSection.classList = 'pokemons';


  for (let index = 0; index < pokemons.length; index++){
      const pokemon = pokemons[index];
      let cont = index + 1;

      const nombre = document.createElement('h3');
      nombre.textContent = 'Nº' + cont + ' ' + pokemon.name;

      const divPokemon = document.createElement('div');
      const button = document.createElement('button');
      const imgPokemon = document.createElement('img');
      

      button.className = 'button';
      pokemonSection.appendChild(divPokemon);
      divPokemon.appendChild(nombre);
      divPokemon.appendChild(button);
      button.appendChild(imgPokemon);
      
      let id = index + 1;
      imgPokemon.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id + '.png';

      const section = document.querySelector('section');
      const seeker = document.querySelector('.buscador');
      button.addEventListener('click', () => {
          section.remove();//se puede hacer section.style.display = none ?
          printPokemonDetail(pokemon.name);
      });

  }
}

export { print }
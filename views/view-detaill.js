import { requestPokemonDetail } from '../api/call-to-api-detail.js';
import { pressBack } from '../views/press-back.js';

//Funcion para pintar el pokemon que se haya seleccionado
const printPokemonDetail = async(pokemonName) => {

  const pokemonDetail = await requestPokemonDetail(pokemonName);
  console.log(pokemonDetail);

  const div = document.createElement('div');
  const imgPokemon = document.createElement('img');
  const main = document.querySelector('main');

  const pokemonDetails = document.createElement('div');
  const name = document.createElement('p');
  const abilityOne = document.createElement('p');
  const abilityTwo = document.createElement('p');

  let firstAbility = '';
  let secondAbility= '';

  for (let index = 0; index < pokemonDetail.abilities.length; index++) {
      const element = pokemonDetail.abilities[index];
      if(index === 0){
          firstAbility = element.ability.name;
      }
      secondAbility = element.ability.name;
  }

  name.textContent = 'Nº' + pokemonDetail.id + ' ' + pokemonName;
  abilityOne.textContent = firstAbility;
  abilityTwo.textContent = secondAbility;

  main.appendChild(div);
  div.appendChild(pokemonDetails);
  pokemonDetails.appendChild(name);
  pokemonDetails.appendChild(abilityOne);
  pokemonDetails.appendChild(abilityTwo);
  div.appendChild(imgPokemon);
  
  imgPokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetail.id}.png`;

  pressBack(main);
}

export { printPokemonDetail }

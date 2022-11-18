import { savePokemon } from './api/call-to-api-list.js';
import { findPokemon } from './views/find_pokemon.js';

savePokemon();

const form = document.querySelector('.form');

form.addEventListener('submit', findPokemon);
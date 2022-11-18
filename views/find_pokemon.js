import { printPokemonDetail } from "./view-detaill.js";


const findPokemon = async (event) => {
    event.preventDefault();
    const input = document.querySelector('input');
    const pokemonName = input.value;
    const section = document.querySelector('section');
    if (section){
        section.remove();
    }

    if (!section){
        const div = document.querySelectorAll('div');
        const button = document.querySelectorAll('button');
        div[1].remove();
        button[1].remove();
    }
    
    printPokemonDetail(pokemonName);
}

export { findPokemon };
import { print } from "../views/view-list.js"
//Funcion para la llamada a la API
function savePokemon () {
  fetch('https://pokeapi.co/api/v2/pokemon/').then((res) => res.json()).then((pokes) => print(pokes));
}

export { savePokemon };
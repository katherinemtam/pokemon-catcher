import pokeData from './data.js';

export function findById(array, id) {
    return array.find(item => id === item.pokemon);
}

export function findPokemonByName(name) {
    return pokeData.find(pokemon => name === pokemon.pokemon);
}
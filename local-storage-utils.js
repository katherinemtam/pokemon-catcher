import { findById } from './utils';


const POKEDEX = 'POKEDEX';

export function getPokedex() {
    const stringyPokedex = localStorage.getItem(POKEDEX);
    if (!stringyPokedex) return [];
    const parsedPokedex = JSON.parse(stringyPokedex);
    return parsedPokedex;
}

export function setPokedex(parsedPokedex) {
    const stringyPokedex = JSON.stringify(parsedPokedex);
    localStorage.setItem(stringyPokedex);
}

export function encounterPokemon(pokemon) {
    const pokedex = getPokedex;
    const matchingPokemon = findById(pokedex, pokemon.pokemon);
    if (matchingPokemon) {
        matchingPokemon.encounter++;
    } else {
        const newPokemon = {
            pokemon: pokemon.pokemon,
            encountered: 1,
            captured: 0
        };
        pokedex.push(newPokemon);
    }
    setPokedex(pokedex);
    return pokedex;
}

export function capturePokemon(pokemon) {
    const pokedex = getPokedex();
    const matchingPokemon = findById(pokedex, pokemon.pokemon);
    matchingPokemon.capture++;
    setPokedex(pokedex);
    return pokedex;
}
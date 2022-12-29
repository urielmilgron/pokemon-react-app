import React from 'react';
import PokemonItem from './PokemonItem';

const PokemonList = ({pokemons, searchTerm}) => {
    console.log(searchTerm)
    const filterPokemons = pokemons.filter(pokemon =>  pokemon.name.includes(searchTerm))
    const searchPokemons = filterPokemons.map(pokemon => <PokemonItem key={pokemon.id} pokemon={pokemon}/>)
    const pokemones = pokemons.map(pokemon => <PokemonItem key={pokemon.id} pokemon={pokemon}/>)
    return (
        <div>
            {searchTerm == '' ? pokemones : searchPokemons}
        </div>
    );
}

export default PokemonList;

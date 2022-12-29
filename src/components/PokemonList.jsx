import React from 'react';
import PokemonItem from './PokemonItem';

const PokemonList = ({pokemons}) => {
    return (
        <div>
            {pokemons.map(pokemon => <PokemonItem key={pokemon.id} pokemon={pokemon}/>)}
        </div>
    );
}

export default PokemonList;

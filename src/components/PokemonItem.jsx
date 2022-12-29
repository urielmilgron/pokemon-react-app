import React from 'react';

const PokemonItem = ( { pokemon }) => {
    const { name, sprites } = pokemon;
    return (
        <div>
            <h2>{name}</h2>
            <img src={sprites.back_default} alt="" />
        </div>
    );
}

export default PokemonItem;

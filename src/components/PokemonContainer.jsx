import React, {useState, useEffect} from 'react';
import { getPokemons } from '../asyncMock';
import PokemonList from './PokemonList';

const PokemonContainer = () => {
    //Usamos useState para guardar los componentes dentro de un estado, para que cuando haya algo, se muestren
    //en el container, y cuando no, se muestre un loading.

    //useState() en este caso tiene un array vacio, porque este siempre va a dar al estado, un valor por defecto
    //la primera vez que se renderice el compoente.

    //Cuando querramos darle valor al estado, lo hacemos con la función setState, que en este caso, como tenemos
    //que darle nombres con respecto al contexto, se llama setPokemons

    const [pokemons, setPokemons] = useState([]);
    //useEffect se usa para cuando llamamos a una api. Se cargan los datos luego de que el componente
    //se renderice.
   console.log(pokemons)
  useEffect(() => {
    getPokemons().then((pokemones) => {
        setPokemons(pokemones)
    })
  })
  
    return (
        <div>
            <PokemonList pokemons={pokemons}/>
        </div>
    );
}

export default PokemonContainer;


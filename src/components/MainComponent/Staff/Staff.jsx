import React, { useEffect, useState } from 'react';

const Staff = () => {
  
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async () =>{
            const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
            const data = await resp.json();
            setPokemons(data);
        }
        getPokemons();
    }, []); //Se ejecua la primera vez que se renderiza el componente

    //Lo del length hace que espere hasta que se haga el fetch
    return (
      <ul>
        {pokemons.length!=0? 
          pokemons.results.map((pokemon, i) => (
              <li key={i}>
                <p> {pokemon.name}</p>
                <a href={pokemon.url}> URL</a>
              </li>
            ))
          : null}
      </ul>
    );
    //En vez del null estaría un spinner, algo que te idica que está cargando los resultados y que espere
}
 
export default Staff
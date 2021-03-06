import React, { Component } from 'react';
import Pokemon from './Pokemon';
import pokemons from '../data';

class Pokedex extends Component {
  render() {
    return (
      <div>
        <h1>Catch'em All:</h1>
        <div className="pokemon-list">  
          {pokemons.map((pokemon) => {
            return <Pokemon
              key={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              averageWeight={pokemon.averageWeight.value}
              image={pokemon.image}
            />
          })}
        </div>
      </div>
    );
  }
}

export default Pokedex; 
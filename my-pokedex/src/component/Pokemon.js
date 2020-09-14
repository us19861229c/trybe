import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image:src} = this.props;
    return (
      <div>
        <h2>Nome: {name}</h2>
        <h3>Tipo: {type}</h3>
        <h3>Peso: {averageWeight} kg</h3>
        <img src={src} alt="imagem de um pokemon"/>
      </div>
    );
  }
} 

export default Pokemon;
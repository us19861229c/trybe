import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image: src } = this.props;
    return (
      <div className="pokemon-card">
        <div className="pokomen-picture">
          <img src={src} alt="imagem de um pokemon" />
        </div>
        <div className="pokemon-info">
          <h2>{name}</h2>
          <h3>{type}</h3>
          <h3>wgt: {averageWeight} kg</h3>
        </div>
      </div>
    );
  }
}

export default Pokemon;
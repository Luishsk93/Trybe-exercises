import React from 'react';

class Pokemom extends React.Component {
  render() {
    return (
      <section>
        <img src= { this.props.pokemom.image } alt={ this.props.pokemom.name}/>
        <p>{ this.props.pokemom.name }</p>
        <p>{ this.props.pokemom.type }</p>
        <p>
           Average weigth:
            { ` ${this.props.pokemom.averageWeight.value} ${this.props.pokemom.averageWeight.measurementUnit}` }
        </p>
      </section>
    )
  }
}

export default Pokemom;
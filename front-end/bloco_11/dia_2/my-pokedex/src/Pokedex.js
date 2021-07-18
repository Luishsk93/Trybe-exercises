import React from 'react';
import data from './data';
import Pokemom from './Pokemom';

class Pokedex extends React.Component {
  render() {
    return(
      <div>
        {data.map((pokemom, index) => <Pokemom key = { index } pokemom = { pokemom }/>)}
      </div>
    )
  }
}

export default Pokedex;
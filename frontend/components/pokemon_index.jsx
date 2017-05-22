import React from 'react';
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon()
  }

  render() {
    const { pokemon } = this.props
    const pokemonItems = pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke}/>)

    return (
      <div className="pokedex">
        <ul>
          {pokemonItems}
        </ul>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
      </div>

    )
  }
}

export default PokemonIndex;

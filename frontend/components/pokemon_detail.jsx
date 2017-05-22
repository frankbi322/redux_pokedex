import React from 'react';
import { Route } from 'react-router-dom';


class PokemonDetail extends React.Component {

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId)
  }

  componentWillReceiveProps(nextProps){
    if (this.props.match.params.pokemonId !== nextProps.match.params.pokemonId) {
      this.props.requestSinglePokemon(nextProps.match.params.pokemonId);
    }
  }

  render() {
    const { pokemonDetail } = this.props;
    return (
      <section className="pokemon-detail">
        <figure>
          <img src={pokemonDetail.image_url}/>
        </figure>
        <ul>
          <h2>{pokemonDetail.name}</h2>
          <li>Attack: {pokemonDetail.attack}</li>
          <li>Defense: {pokemonDetail.defense}</li>
          <li>Moves: {pokemonDetail.moves.join(", ")}</li>

        </ul>
    </section>
    );
  }
}

export default PokemonDetail;

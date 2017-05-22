import {merge} from 'lodash';
import {RECEIVE_SINGLE_POKEMON, RECEIVE_NEW_POKEMON} from '../actions/pokemon_actions';

const defaultPokemon = {
  image_url: '',
  name: '',
  poke_type: '',
  attack: '',
  defense: '',
  moves: [],
  items: []
}

const PokemonDetailReducer = (state= defaultPokemon, action) => {
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      // return merge({}, action.pokemon)
    case RECEIVE_NEW_POKEMON:
        return merge({}, action.pokemon)
    default:
      return state;
  }
}

export default PokemonDetailReducer;

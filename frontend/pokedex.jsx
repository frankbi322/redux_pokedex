import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route} from 'react-router-dom';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './components/pokemon_index_container'
// import Root from './root.jsx'

import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util'
import { selectAllPokemon } from './reducers/selectors';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');

  window.store = store;
  window.selectAllPokemon = selectAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.requestAllPokemon = requestAllPokemon;

  const Root = () => (
    <Provider store={store} >
      <HashRouter>
        <Route path="/" component={ PokemonIndexContainer }/>
      </HashRouter>
    </Provider>
  )


  ReactDOM.render(<Root store={store}></Root>, root);
});

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import store from './store';
import {Provider} from 'react-redux';
import Game from './game/Container';

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>
  , document.getElementById('app')
)

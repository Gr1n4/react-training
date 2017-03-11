"use strict";

import ReactDOM from 'react-dom';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './assets/sass/index.sass';

import App from './app/app.component';

const initialState = [
  'element 1',
  'element 2'
];

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ELEMENT':
      return [...state, action.payload];
  }
  return state;
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

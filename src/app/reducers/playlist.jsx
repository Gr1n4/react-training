"use strict";

const initialState = [
  'playlist 1',
  'playlist 2'
];

export default function playlist(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PLAYLIST':
      return [...state, action.payload];
  }
  return state;
}
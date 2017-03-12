"use strict";

const initialState = [
  'track 1',
  'track 2'
];

export default function track(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TRACK':
      return [...state, action.payload];
  }
  return state;
}

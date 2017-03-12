"use strict";

import {combineReducers} from 'redux';

import track from './track';
import playlist from './playlist';

export default combineReducers({
  tracks: track,
  playlists: playlist
});
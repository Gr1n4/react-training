"use strict";

import React, {Component} from 'react';
import {connect} from 'react-redux';

import './app.component.sass';

class App extends Component {
  addTrack() {
    this.props.addTrack(`track ${this.props.tracks.length + 1}`);
  }

  addPlaylist() {
    this.props.addPlaylist(`playlist ${this.props.playlists.length + 1}`);
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <button onClick={this.addTrack.bind(this)}>add track</button>
        <ul>
          {this.props.tracks.map((item, index) =>
            <li key={index}>{item}</li>
          )}
        </ul>
        <button onClick={this.addPlaylist.bind(this)}>add playlist</button>
        <ul>
          {this.props.playlists.map((item, index) =>
            <li key={index}>{item}</li>
          )}
        </ul>
      </div>
    );
  }
}

function mapState(state) {
  return {
    tracks: state.tracks,
    playlists: state.playlists
  }
}

function dispatchState(dispatch) {
  return {
    addTrack: function(elem) {
      dispatch({type: 'ADD_TRACK', payload: elem});
    },
    addPlaylist: function(elem) {
      dispatch({type: 'ADD_PLAYLIST', payload: elem});
    }
  }
}

const AppConnect = connect(mapState, dispatchState)(App);
export default AppConnect;

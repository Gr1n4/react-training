"use strict";

import React, {Component} from 'react';
import {connect} from 'react-redux';

import './app.component.sass';

class App extends Component {
  addElement() {
    this.props.addElement('test');
  }

  render() {
    console.log(this.props.testStore);
    return (
      <div>
        <h1>Hello World!</h1>
        <button onClick={this.addElement.bind(this)}>add</button>
        <ul>
          {this.props.testStore.map((item, index) =>
            <li key={index}>{item}</li>
          )}
        </ul>
      </div>
    );
  }
}

function mapState(state) {
  return {
    testStore: state
  }
}

function dispatchState(dispatch) {
  return {
    addElement: function(elem) {
      dispatch({type: 'ADD_ELEMENT', payload: elem});
    }
  }
}

const AppConnect = connect(mapState, dispatchState)(App);
export default AppConnect;

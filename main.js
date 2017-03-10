"use strict";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        app component
        <Child />
      </div>
    );
  }
}

class Child extends React.Component {
  render() {
    return (
      <div className="app">
        child app component
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

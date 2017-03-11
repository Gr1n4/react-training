"use strict";

const testData = [
  {
    title: 'element 1',
    id: 1
  },
  {
    title: 'element 2',
    id: 2
  },
  {
    title: 'element 3',
    id: 3
  }
];

class App extends React.Component {
  render() {
    return (
      <div className="app">
        app component
        <Child data={testData}/>
        <TestButton></TestButton>
      </div>
    );
  }
}

class Child extends React.Component {
  render() {
    let template = this.props.data.map((item, index) => {
      return (
        <div key={item.id}>
          <p>{item.id} {item.title}</p>
        </div>
      )
    });
    console.log(template);
    return (
      <div className="child">
        child app component
        {template}
      </div>
    );
  }
}

class TestButton extends React.Component {
  testClick() {
    console.log('test');
  }

  render() {
    return (
      <button type="button" onClick={this.testClick}>test</button>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

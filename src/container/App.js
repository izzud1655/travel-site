import React, { Component } from 'react';
import CardList from '../component/CardList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robot: [],
      searchField: ''
    }
  }

  componentDidMount() {
    const robots = [{ id: 1123122, name: "Aiman", age: "29" },
    { id: 434323, name: "Amrin", age: "26" },
    { id: 61345434, name: "Yahya", age: "30" },
    { id: 112325, name: "Gebra", age: "22" },
    { id: 453456, name: "Chon Wei", age: "24" }];
    this.setState({ robot: robots})
  }
  render() {
    return (
      <div>
        <div className="tc">
          <h1 className="f1">SmartRobot</h1>
          <CardList robot={this.state.robot} />
        </div>
      </div>
    )
  }
}

export default App;

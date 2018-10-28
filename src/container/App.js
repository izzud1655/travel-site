import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from '../component/CardList';
import './App.css';
import SearchBox from '../component/SearchBox';
import {setSearchField} from '../actions';

const mapStateToProps = state =>{
  return {
    searchField: state.searchField
  }
}
const mapDispatchToProps = dispatch =>{
  return {onSearchHandler: (event) => dispatch(setSearchField(event.target.value))}
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      robot: []
    }
  }

  componentDidMount() {
    // const robots = [{ id: 1123122, name: "Aiman", age: "29" },
    // { id: 434323, name: "Amrin", age: "26" },
    // { id: 61345434, name: "Yahya", age: "30" },
    // { id: 112325, name: "Gebra", age: "22" },
    // { id: 453456, name: "Chon Wei", age: "24" }];
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({ robot: users})});
  }

  // onSearchHandler = (event) => {
  //   this.setState({searchField: event.target.value});
  // }
  render() {
    const newRobots = this.state.robot.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField);
  });
    return (
      <div>
        <div className="tc">
          <h1 className="f1">SmartRobot</h1>
          <SearchBox searchChange ={this.props.onSearchHandler}/>
          <CardList robot={newRobots} />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput';
import UserInput from './UserInput';

class App extends Component {
  state = {
    name: 'Riz',
  };

  onChangeHandler = ({ target }) => {
    this.setState({
      name: target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <UserInput value={this.state.name} change={this.onChangeHandler} />
        <UserOutput name={this.state.name} />
        <UserOutput name={this.state.name} />
        <UserOutput name="My name" />
      </div>
    );
  }
}

export default App;

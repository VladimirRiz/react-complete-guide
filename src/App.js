import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput';
import UserInput from './UserInput';

class App extends Component {
  state = {
    persons: [
      { id: 'qwe1', name: 'Riz' },
      { id: 'qwe', name: 'Rita' },
      { id: 'wqeq', name: 'Vlad' },
    ],
  };

  onChangeHandler = ({ target }, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);
    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons,
    });
  };

  deletePerson = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons,
    });
  };

  render() {
    const { persons } = this.state;
    return (
      <div className="App">
        <h1>Hello</h1>
        {persons.map((person, index) => {
          return (
            <div key={person.id}>
              <UserOutput
                name={person.name}
                delete={this.deletePerson.bind(this, index)}
              />
              <UserInput
                value={person.name}
                change={(event) => this.onChangeHandler(event, person.id)}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

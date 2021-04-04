import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Persons from '../components/Persons';

class App extends Component {
  state = {
    persons: [
      { id: 'qwe1', name: 'Riz' },
      { id: 'qwe', name: 'Rita' },
      { id: 'wqeq', name: 'Vivienne' },
    ],
    open: false,
  };

  onChangeHandler = ({ target }, id) => {
    const { persons } = this.state;
    const personIndex = persons.findIndex((p) => p.id === id);
    const person = {
      ...persons[personIndex],
    };
    person.name = target.value;
    const updatedPersons = [...persons];
    updatedPersons[personIndex] = person;
    this.setState({
      persons: updatedPersons,
    });
  };

  deletePerson = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons,
    });
  };

  toggleList = () => {
    const isOpen = this.state.open;
    this.setState({
      open: !isOpen,
    });
  };

  render() {
    const { persons, open } = this.state;
    const style = {
      display: 'block',
      margin: '1rem auto',
      padding: '.5rem 1rem',
      backgroundColor: '#eef',
      borderRadius: '5px',
      cursor: 'pointer',
      outline: 'none',
      ':hover': {
        backgroundColor: '#ccf',
      },
    };

    let person = null;

    if (open) {
      console.log(persons);
      person = (
        <Persons
          persons={persons}
          delete={this.deletePerson}
          change={this.onChangeHandler}
        />
      );
      // person = style.backgroundColor = '#ffe';
      // style[':hover'] = {
      //   backgroundColor: '#ffb',
      // };
    }

    return (
      <div className="App">
        <button style={style} onClick={this.toggleList}>
          {open ? 'Close' : 'Open'}
        </button>
        {person}
      </div>
    );
  }
}

export default Radium(App);

import React from 'react';
import Person from './Person';

const persons = (props) =>
  props.persons.map((person, index) => (
    <div key={person.id} className="card">
      <Person
        person={person}
        index={index}
        change={(event) => props.change(event, person.id)}
        onDelete={props.delete.bind(this, index)}
      />
    </div>
  ));

export default persons;

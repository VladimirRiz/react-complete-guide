import React from 'react';
import UserOutput from '../../UserOutput';
import UserInput from '../../UserInput';

const person = ({ person, change, onDelete }) => (
  <div>
    <UserInput
      value={person.name}
      change={change}
      length={person.name.length}
    />

    <UserOutput name={person.name} delete={onDelete} />
  </div>
);

export default person;

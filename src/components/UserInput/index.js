import React from 'react';
import './style.css';
import Validation from '../Validation';

const UserInput = (props) => (
  <div className="user-input">
    <Validation length={props.length} />
    <input value={props.value} onChange={props.change} type="text" />
  </div>
);

export default UserInput;

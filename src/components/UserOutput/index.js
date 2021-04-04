import React from 'react';
import './style.css';

const UserOutput = (props) => (
  <div className="user-output">
    <p>Name : {props.name}</p>
    <button onClick={props.delete}>Delete Person</button>
  </div>
);

export default UserOutput;

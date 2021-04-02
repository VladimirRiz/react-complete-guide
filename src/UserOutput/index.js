import React from 'react';
import './style.css';

const UserOutput = (props) => {
  return (
    <div className="user-output">
      <p>Name : {props.name}</p>
      <button onClick={props.delete}>delete Person</button>
    </div>
  );
};

export default UserOutput;

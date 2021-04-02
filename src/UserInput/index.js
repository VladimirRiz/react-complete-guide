import React from 'react';
import './style.css';

const UserInput = (props) => {
  return (
    <div className="user-input">
      <input value={props.value} onChange={props.change} type="text" />
    </div>
  );
};

export default UserInput;

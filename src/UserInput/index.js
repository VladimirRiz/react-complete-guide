import React from 'react';

const UserInput = (props) => {
  return (
    <div>
      <input value={props.value} onChange={props.change} type="text" />
    </div>
  );
};

export default UserInput;

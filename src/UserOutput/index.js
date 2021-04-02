import React from 'react';

const UserOutput = (props) => {
  return (
    <div>
      <p>Name : {props.name}</p>
      <button onClick={props.delete}>delete Person</button>
    </div>
  );
};

export default UserOutput;

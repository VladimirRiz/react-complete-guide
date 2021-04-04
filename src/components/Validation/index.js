import React from 'react';

const validation = (props) => {
  let message = 'text is long enough';
  if (props.length <= 5) {
    message = 'text is too short';
  }
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default validation;

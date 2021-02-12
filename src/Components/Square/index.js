import React from 'react';
import './index.css';

//component - square is a button
function Square({ handleClick, value, i }) {
  //handleClick as event function, taking i (index) of the square position
  //value is the child of the butt_on
  return (
    <button
      className="square"
      onClick={() => {
        handleClick(i);
      }}
    >
      {value}
    </button>
  );
}

export default Square;

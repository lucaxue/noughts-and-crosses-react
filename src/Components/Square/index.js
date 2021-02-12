import React from 'react';

//component - square is a button
function Square({ handleClick, value, i }) {
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

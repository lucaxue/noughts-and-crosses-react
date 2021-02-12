import Square from '../Square';
import React from 'react';
import './index.css';

function Board({ squares, handleClick }) {
  //slice + map to return squares in appropriate rows
  //item, index, and handleClick passed to appropraite props
  return (
    <div>
      <div className="board-row">
        {/* three sq keys 0 1 2  */}
        {squares.slice(0, 3).map((item, index) => (
          <Square
            key={index}
            value={item}
            handleClick={handleClick}
            i={index}
          />
        ))}
      </div>
      <div className="board-row">
        {/* three sq keys 3 4 5 */}
        {squares.slice(3, 6).map((item, index) => (
          <Square
            key={index + 3}
            value={item}
            handleClick={handleClick}
            i={index + 3}
          />
        ))}
      </div>
      <div className="board-row">
        {squares.slice(6).map((item, index) => (
          <Square
            key={index + 6}
            value={item}
            handleClick={handleClick}
            i={index + 6}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;

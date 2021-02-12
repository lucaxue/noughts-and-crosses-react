import './App.css';
import React, { useState } from 'react';

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

function Board() {
  //state of squares
  const [squares, setSquares] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <div>
      <div className="status">{`Next player:${xIsNext ? 'X' : 'O'}`}</div>
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

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default Game;

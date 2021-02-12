import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

//component - square is a button
function Square({ handleClick, value, i }) {
  return (
    <button className="square" onClick={() => {handleClick(i)}}>
      {value}
    </button>
  );
}

function Board() {
  const [status, setStatus] = useState('Next player: X');
  //state of squares
  const [squares, setSquares] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);

  function handleClick(i){
    const newSquares = squares.slice();
    newSquares[i] = 'X';
    setSquares(newSquares);
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {/* three sq keys 0 1 2  */}
        {squares.slice(0, 3).map((item) => (
          <Square key={item} value={item} handleClick={handleClick} i={item} />
        ))}
      </div>
      <div className="board-row">
        {/* three sq keys 3 4 5 */}
        {squares.slice(3, 6).map((item) => (
          <Square key={item} value={item} handleClick={handleClick} i={item} />
        ))}
      </div>
      <div className="board-row">
        {squares.slice(6).map((item) => (
          <Square key={item} value={item} handleClick={handleClick} i={item}/>
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

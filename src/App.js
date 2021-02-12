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

function Board({ squares, handleClick }) {

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

function Game() {
  const [history, setHistory] = useState([{
    squares: Array(9).fill(null),
  }]);
  const [xIsNext, setXIsNext] = useState(true);

    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }


    function handleClick(i) {
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = xIsNext ? 'X' : 'O';
      setHistory([...history, {squares: squares}]);
      setXIsNext(!xIsNext);
    }


  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} handleClick={handleClick}/>
      </div>
      <div className="game-info">
      <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default Game;


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

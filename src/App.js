import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

//component - square is a button
function Square({value}) {
  return <button className="square" onClick={() => alert('you have clicked me')}>{value}</button>;
}

const boardRow1 = [0, 1, 2];
const boardRow2 = [3, 4, 5];
const boardRow3 = [6, 7, 8];

function Board() {
  const [status, setStatus] = useState('Next player: X');
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {/* three sq keys 0 1 2  */}
        {boardRow1.map((SqNum) => (
          <Square key={SqNum} value={SqNum} />
        ))}
      </div>
      <div className="board-row">
        {/* three sq keys 3 4 5 */}
        {boardRow2.map((SqNum) => (
          <Square key={SqNum} value={SqNum} />
        ))}
      </div>
      <div className="board-row">
        {/* three sq keys 6 7 8 */}
        {boardRow3.map((SqNum) => (
          <Square key={SqNum} value={SqNum} />
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

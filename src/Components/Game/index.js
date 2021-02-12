import React, { useState } from 'react';
import Board from '../Board';
import './index.css';

function Game() {
  //history state to track history of moves - initial state of an object with a key called sqaures of an array of 9 nulls
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);
  //xIsNext state to track player to turn, it is a boolean - initial state of true
  const [xIsNext, setXIsNext] = useState(true);
  //stepNumber state to track the current step number, used after to go back turns - initial states of 0
  const [stepNumber, setStepNumber] = useState(0);
  //shallow copy of the history state up to the stepNumber
  const historyArr = history.slice(0, stepNumber + 1);
  //current points to the object of the current board
  const current = historyArr[historyArr.length - 1];
  //finds winner using the calculateWinner function, with the squares property from current, passed in
  const winner = calculateWinner(current.squares);

  let status;

  //Prints winner if there is a winner, else prints player turn
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = (xIsNext ? 'X' : 'O') + "'s turn ";
  }

  //takes in step as parameter, uses setStepNumber to set the state stepNumber to desired step
  //changes player turn using setXIsNext setter - even is X, odd is O
  function jumpTo(step) {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  }

  function handleClick(i) {
    //shallow copy of the history state up to the stepNumber
    const historyArr = history.slice(0, stepNumber + 1);
    //current points to the object of the current board
    const current = historyArr[historyArr.length - 1];
    //shallow copy of the squares in current
    const squares = current.squares.slice();

    //if there is a winner, or used square - ends the function by returning nothing
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    //changes square at index to appropriate X or O depending on xIsNext boolean state
    squares[i] = xIsNext ? 'X' : 'O';

    //uses setHistory setter to set history state to historyArr and the new squares
    setHistory([...historyArr, { squares: squares }]);
    //sets stepNumber state to history's lenght (which has just been updated)
    setStepNumber(history.length);
    //next player's turn - sets xIsNext to opposite bool
    setXIsNext(!xIsNext);
  }

  //returns board with current.squares and handleClick passed in
  //returns status - player turn or winner
  //returns appropriate Go to move descripton as an li in the ol
  return (
    <div className="game">
      <h1>{'Noughts and Crosses'}</h1>
      <div className="game-board">
        <Board squares={current.squares} handleClick={handleClick} />
      </div>
      <span className="game-info">
        <span className="status">{`Turn ${stepNumber}: ${status}`}</span>
        <ul>
          {history.map((step, move) => {
            const desc = move ? 'Go to move #' + move : 'Go to game start';
            return (
              <li key={move}>
                <button
                  onClick={() => {
                    jumpTo(move);
                  }}
                >
                  {desc}
                </button>
              </li>
            );
          })}
        </ul>
      </span>
    </div>
  );
}

export default Game;

//hoisting!!
function calculateWinner(squares) {
  //winning combinations
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
  //loops through lines array
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    //checks if squares is equal to one of the winning array combinations
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      //returns the value of the square
      return squares[a];
    }
  }
  //returns nothing if no winner
  return null;
}

import logo from "./logo.svg";
import "./App.css";


//component - square is a button
function Square() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }

function Board() {
  

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

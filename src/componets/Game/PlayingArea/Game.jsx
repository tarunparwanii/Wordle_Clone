import React from "react";
import Board from "../PlayingArea/GameBoard/Board";
import Keyboard from "./GameKeyBoard/KeyBoard.jsx";
import "../PlayingArea/Game.css";

function Game() {
  return (
    <div className="game">
      <div className="game-container">
        <Board />
        <Keyboard />
      </div>
    </div>
  );
}

export default Game;

import React, { useContext } from "react";
import "../GameBoard/Board.css";
import Tile from "../GameBoard/BoardTile/Tile.jsx";
import { AppContext } from "../../../../App";

function Board() {
  const { gamesPlayed } = useContext(AppContext);

  const bonusRound = gamesPlayed % 5 === 0 ? "BonusRound" : undefined;

  return (
    <div className="board-container">
      <div className={"board slide-in-blurred-bl " + bonusRound}>
        <div className="row">
          <Tile attemptVal={0} letterPos={0} />
          <Tile attemptVal={0} letterPos={1} />
          <Tile attemptVal={0} letterPos={2} />
          <Tile attemptVal={0} letterPos={3} />
          <Tile attemptVal={0} letterPos={4} />
        </div>
        <div className="row">
          <Tile attemptVal={1} letterPos={0} />
          <Tile attemptVal={1} letterPos={1} />
          <Tile attemptVal={1} letterPos={2} />
          <Tile attemptVal={1} letterPos={3} />
          <Tile attemptVal={1} letterPos={4} />
        </div>
        <div className="row">
          <Tile attemptVal={2} letterPos={0} />
          <Tile attemptVal={2} letterPos={1} />
          <Tile attemptVal={2} letterPos={2} />
          <Tile attemptVal={2} letterPos={3} />
          <Tile attemptVal={2} letterPos={4} />
        </div>
        <div className="row">
          <Tile attemptVal={3} letterPos={0} />
          <Tile attemptVal={3} letterPos={1} />
          <Tile attemptVal={3} letterPos={2} />
          <Tile attemptVal={3} letterPos={3} />
          <Tile attemptVal={3} letterPos={4} />
        </div>
        <div className="row">
          <Tile attemptVal={4} letterPos={0} />
          <Tile attemptVal={4} letterPos={1} />
          <Tile attemptVal={4} letterPos={2} />
          <Tile attemptVal={4} letterPos={3} />
          <Tile attemptVal={4} letterPos={4} />
        </div>
        <div className="row">
          <Tile attemptVal={5} letterPos={0} />
          <Tile attemptVal={5} letterPos={1} />
          <Tile attemptVal={5} letterPos={2} />
          <Tile attemptVal={5} letterPos={3} />
          <Tile attemptVal={5} letterPos={4} />
        </div>
      </div>
    </div>
  );
}

export default Board;

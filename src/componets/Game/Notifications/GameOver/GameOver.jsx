import React, { useContext } from "react";
import { AppContext } from "../../../../App";
import "../GameOver/GameOver.css";

function GameOver(props) {
  const { CurrAttempt, correctWord, gameOver } = useContext(AppContext);
  const color = gameOver.guessed ? "green" : "yellow";
  return (
    <div className="gameover">
      <div className="gameover-container slide-in-elliptic-top-fwd">
        <div className={"gameover" + color}>
          {gameOver.guessed ? (
            <>
              <span>{props.message}</span>
              You guessed it in :<span>{CurrAttempt.attempt}</span>
              Attempts
            </>
          ) : (
            <>
              {props.message}
              <span> ;) NeXT TiMe MaYbe </span>
              <br />
              Correct Word :<span> {correctWord.toUpperCase()} </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default GameOver;

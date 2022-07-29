import React, { useCallback, useEffect, useContext } from "react";
import Key from "./KeyBoardKeys/Key.jsx";
import { AppContext } from "../../../../App";
import "../GameKeyBoard/KeyBoard.css";

function Keyboard() {
  const {
    onDelete,
    onEnter,
    onSelect,
    disabledLetters,
    correctLetters,
    almostLetters,
    gamesPlayed,
  } = useContext(AppContext);

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const bonusRound = gamesPlayed % 5 === 0 ? "BonusRound" : undefined;

  // Keyboard key reading
  // eslint-disable-next-line
  const keyPressed = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace" || event.Key === "Delete") {
      onDelete();
    } else {
      keys1.forEach((key) => {
        if (event.key.toUpperCase() === key.toUpperCase()) {
          onSelect(key);
        }
      });
      keys2.forEach((key) => {
        if (event.key.toUpperCase() === key.toUpperCase()) {
          onSelect(key);
        }
      });
      keys3.forEach((key) => {
        if (event.key.toUpperCase() === key.toUpperCase()) {
          onSelect(key);
        }
      });
    }
  });

  // event listener
  useEffect(() => {
    document.addEventListener("keydown", keyPressed);
    return () => {
      document.removeEventListener("keydown", keyPressed);
    };
  }, [keyPressed]);

  return (
    <div className="keyboard" onKeyDown={keyPressed}>
      <div className={"keyboard-container slide-in-blurred-br " + bonusRound}>
        <div className="line1">
          {keys1.map((key, ind) => {
            return (
              <Key
                key={ind}
                keyVal={key}
                disabled={disabledLetters.includes(key)}
                correct={correctLetters.includes(key)}
                almost={almostLetters.includes(key)}
              />
            );
          })}
        </div>
        <div className="line2">
          {keys2.map((key, ind) => {
            return (
              <Key
                key={ind}
                keyVal={key}
                disabled={disabledLetters.includes(key)}
                correct={correctLetters.includes(key)}
                almost={almostLetters.includes(key)}
              />
            );
          })}
        </div>
        <div className="line3">
          <Key keyVal={"ENTER"} bigKey="True" id="enter" />
          {keys3.map((key, ind) => {
            return (
              <Key
                key={ind}
                keyVal={key}
                disabled={disabledLetters.includes(key)}
                almost={almostLetters.includes(key)}
                correct={correctLetters.includes(key)}
              />
            );
          })}
          <Key keyVal="DELETE" bigKey="True" id="delete" />
        </div>
      </div>
    </div>
  );
}

export default Keyboard;

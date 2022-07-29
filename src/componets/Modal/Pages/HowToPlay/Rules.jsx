import React from "react";
import "./Rules.css";
import { HiViewList } from "react-icons/hi";
import { GiFireZone } from "react-icons/gi";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

function Rules() {
  return (
    <div className="Rules-container">
      <div className="instructions-container">
        <p>
          <HiOutlineArrowCircleRight className="arrow" />
          Guess the hidden word in 6 tries.
        </p>
        <p>
          <HiOutlineArrowCircleRight className="arrow" />
          Each guess must be a valid 5 letter word.
        </p>
        <p>
          <HiOutlineArrowCircleRight className="arrow" />
          You cannot enter random letters.
        </p>
        <p>
          <HiOutlineArrowCircleRight className="arrow" />
          Hit the enter button to submit the guess.
        </p>
        <p>
          <HiOutlineArrowCircleRight className="arrow" />
          On submission, the color of the tiles changes as in the examples given
          in TAB (<HiViewList className="TAB" />
          ).
        </p>
        <p>
          <HiOutlineArrowCircleRight className="arrow" />
          Overall Scoring info given in TAB (<GiFireZone className="TAB" />
          ). Negative Scoring starts when u cross 50.
        </p>
      </div>
    </div>
  );
}

export default Rules;

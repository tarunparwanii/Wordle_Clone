import React from "react";
import "./Example.css";

function Example() {
  return (
    <div className="examples slide-in-fwd-center">
      <p>
        <strong className="example-heading">Examples</strong>
      </p>
      <div className="example">
        <div className="rules-row">
          <div className="rules-tile correct">W</div>
          <div className="rules-tile">O</div>
          <div className="rules-tile">R</div>
          <div className="rules-tile">D</div>
          <div className="rules-tile">S</div>
        </div>
        <p>
          The letter <strong>W</strong> is in the word and in the correct spot.
        </p>
      </div>
      <div className="example">
        <div className="rules-row">
          <div className="rules-tile">G</div>
          <div className="rules-tile">R</div>
          <div className="rules-tile almost">E</div>
          <div className="rules-tile">A</div>
          <div className="rules-tile">T</div>
        </div>
        <p>
          The letter <strong>E</strong> is in the word but in the wrong spot.
        </p>
      </div>
      <div className="example">
        <div className="rules-row">
          <div className="rules-tile">T</div>
          <div className="rules-tile">R</div>
          <div className="rules-tile">U</div>
          <div className="rules-tile">C</div>
          <div className="rules-tile error">E</div>
        </div>
        <p>
          The letter <strong>E</strong> is not in the word in any spot at all.
        </p>
      </div>
    </div>
  );
}

export default Example;

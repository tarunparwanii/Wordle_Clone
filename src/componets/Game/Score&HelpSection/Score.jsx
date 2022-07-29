import React, { useState } from "react";
import { GiHelp } from "react-icons/gi";
import "./Score.css";
import Modal from "../../Modal/Modal";

function Score(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="score">
      <div className="help" onClick={() => setShowModal(true)}>
        <GiHelp />
      </div>
      <Modal
        rules={showModal}
        allStats={props.Allstats}
        hideModal={() => setShowModal(false)}
      />
      &ensp;SCORE : {props.Score}
    </div>
  );
}

export default Score;

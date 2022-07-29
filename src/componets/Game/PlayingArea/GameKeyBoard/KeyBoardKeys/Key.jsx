import React, { useContext } from "react";
import { FiDelete } from "react-icons/fi";
import { AiOutlineEnter } from "react-icons/ai";
import { AppContext } from "../../../../../App";

function Key(props) {
  const { onSelect, onDelete, onEnter } = useContext(AppContext);

  const selectLetter = () => {
    if (props.keyVal === "ENTER") {
      onEnter();
    } else if (props.keyVal === "DELETE") {
      onDelete();
    } else {
      onSelect(props.keyVal);
    }
  };

  const keyStatus = props.bigKey
    ? "big"
    : props.disabled
    ? "disabled"
    : props.correct
    ? "correct"
    : props.almost
    ? "almost"
    : undefined;

  return (
    <div className={"key " + keyStatus} onClick={selectLetter}>
      {props.keyVal === "DELETE" ? (
        <FiDelete />
      ) : props.keyVal === "ENTER" ? (
        <AiOutlineEnter />
      ) : (
        props.keyVal
      )}
    </div>
  );
}

export default Key;

import React from "react";
import "./Alert.css";
function Alert(props) {
  return (
    <div className="alert-container bounce-in-fwd">
      <div className="alert">{props.message}</div>
    </div>
  );
}

export default Alert;

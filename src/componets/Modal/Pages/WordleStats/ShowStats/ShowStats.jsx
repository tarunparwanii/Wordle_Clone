import React from "react";
import "./ShowStats.css";

function WordleStats(props) {
  return (
    <div className="single-stats-container">
      <div className="stat-heading-container">
        <div className="stat-heading"> {props.title}</div>
      </div>
      <div className="stat-value-container">
        <div className="stat-value">{props.value}</div>
      </div>
    </div>
  );
}

export default WordleStats;

import React, { useContext } from "react";
import { IoStatsChartOutline } from "react-icons/io5";
import "./GameStatistics.css";
import { AppContext } from "../../../App";

function GameStatistics(props) {
  let winRate = 0;

  const { gamesPlayed } = useContext(AppContext);
  const bonusRound = gamesPlayed % 5 === 0 ? "BonusRound" : undefined;

  if (props.played !== 0)
    winRate = Math.round((props.wins / props.played) * 100);

  return (
    <div className="Stats-container">
      <div className={"stats slide-in-blurred-bottom "+ bonusRound}>
        <span>
          <div className="stats-icon">
            {" "}
            <IoStatsChartOutline />{" "}
          </div>
          &nbsp;Total Wins:{" "}
          <div className="value slide-in-blurred-top">
            <div className="pulsevalue pulsate-fwd"> {props.wins} | </div>
          </div>
          &nbsp;Total Games Played:{" "}
          <div className="value slide-in-blurred-top">
            <div className="pulsevalue pulsate-fwd">{props.played} |</div>
          </div>
          &nbsp;Current Win Streak:{" "}
          <div className="value slide-in-blurred-top">
            <div className="pulsevalue pulsate-fwd">{props.streak} |</div>
          </div>
          &nbsp;Max Win Streak:{" "}
          <div className="value slide-in-blurred-top">
            <div className="pulsevalue pulsate-fwd">{props.max} |</div>
          </div>
          &nbsp;Win Rate:{" "}
          <div className="value slide-in-blurred-top">
            <div className="pulsevalue pulsate-fwd">{winRate}</div>
          </div>{" "}
          %{" "}
          <div className="stats-icon" id="flip">
            <IoStatsChartOutline />
          </div>{" "}
        </span>
      </div>
    </div>
  );
}

export default GameStatistics;

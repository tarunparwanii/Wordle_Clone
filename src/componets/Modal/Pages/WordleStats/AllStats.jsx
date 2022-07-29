import React, { useContext } from "react";
import { ModalContext } from "../../Modal";
import WordleStats from "./ShowStats/ShowStats";
import "./AllStats.css";
import { StatsChart } from "./StatChart/StatsChart";

function AllStats() {
  const { allstats } = useContext(ModalContext);

  const guessRate = allstats.stat_gamesPlayed
    ? ((allstats.stat_gamesWon / allstats.stat_gamesPlayed) * 100).toFixed(2)
    : 0;

  return (
    <div className="Allstats-container">
      <span className="Allstats-heading">Game</span>
      <div className="Allstats-line">
        <WordleStats title="Played" value={allstats.stat_gamesPlayed} />
        <WordleStats title="Won" value={allstats.stat_gamesWon} />
        <WordleStats
          title="Lost"
          value={allstats.stat_gamesPlayed - allstats.stat_gamesWon}
        />
        <WordleStats title="Win%" value={guessRate} />
      </div>
      <span className="Allstats-heading">Streak</span>
      <div className="Allstats-line">
        <WordleStats title="Current" value={allstats.stat_winStreak} />
        <WordleStats title="Max" value={allstats.stat_maxStreak} />
      </div>
      <span className="Allstats-heading">SCORE</span>
      <span className="Allstats-Score">{allstats.stat_score}</span>
      <span className="Allstats-heading">Attempt Stats</span>
      <StatsChart />
    </div>
  );
}

export default AllStats;

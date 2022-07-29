import React from "react";
import { GiTrophy } from "react-icons/gi";
import "./ScoringRules.css";

function ScoringRules() {
  return (
    <div className="scoringrules-container">
      <strong className="scoringrules-heading">Scoring Criteria</strong>
      <table>
        <thead>
          <tr>
            <th>Attempts</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>15</td>
          </tr>
          <tr>
            <td>2</td>
            <td>10</td>
          </tr>
          <tr>
            <td>3</td>
            <td>8</td>
          </tr>
          <tr>
            <td>4</td>
            <td>6</td>
          </tr>
          <tr>
            <td>5</td>
            <td>4</td>
          </tr>
          <tr>
            <td>6</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>

      <span className="Bonus-info">
        <GiTrophy /> Every 5th round is a BONUS-round <br />
        <GiTrophy />
        Color changes in BONUS round
        <br />
        <GiTrophy />
        On Winning you get +10
      </span>

      <div className="heading">
        <strong className="scoringrules-heading">Streak Scoring</strong>
      </div>
      <table>
        <thead>
          <tr>
            <th>Streak</th>
            <th>Score-Added</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> &gt;= 5 </td>
            <td>+2</td>
          </tr>
          <tr>
            <td> &gt;= 10 </td>
            <td> +3 </td>
          </tr>
          <tr>
            <td> &gt;= 20 </td>
            <td> +5 </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ScoringRules;
// if (winStreak &gt;=  5 && winStreak < 10) setScore(score + 2);
//         if (winStreak &gt;=  10 && winStreak < 20) setScore(score + 3);
//         if (winStreak &gt;=  20) setScore(score + 5);

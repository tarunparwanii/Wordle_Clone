import React, { useContext } from "react";
import "./Title.css";
import { AppContext } from "../../../App";

function Nav() {
  function refreshPage() {
    window.location.reload();
  }

  const { gamesPlayed } = useContext(AppContext);
  const bonusRound = gamesPlayed % 5 === 0 ? "BonusRound" : undefined;

  return (
    <nav className="Nav">
      <div
        className={"title slide-in-blurred-top " + bonusRound}
        onClick={refreshPage}
      >
        WorDLe&ensp;|_|nLimiTe|]
      </div>
    </nav>
  );
}

export default Nav;

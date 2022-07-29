import React, { useContext } from "react";
import { ModalContext } from "../Modal";

import Rules from "../Pages/HowToPlay/Rules";
import Example from "../Pages/WordleExample/Example";
import ScoringRules from "../Pages/ScoringRules/ScoringRules";
import AllStats from "../Pages/WordleStats/AllStats";

function NavHeads() {
  const { showNavHead } = useContext(ModalContext);

  if (showNavHead === 1) return <Rules />;
  if (showNavHead === 2) return <Example />;
  if (showNavHead === 3) return <ScoringRules />;
  if (showNavHead === 4) return <AllStats />;
}

export default NavHeads;

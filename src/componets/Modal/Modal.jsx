import React, { createContext, useState } from "react";
import ReactDom from "react-dom";
import "./Modal.css";
import { SiGoogleplay } from "react-icons/si";
import ModalNav from "./ModalNavBar/ModalNav";
import NavHeads from "./ModalNavBar/NavHeads";

export const ModalContext = createContext();

export default function Modal(props) {
  const [showNavHead, setShowNavHead] = useState(1);

  if (!props.rules) return null;
  const allstats = props.allStats;
  return ReactDom.createPortal(
    <div className="overLay">
      <div className="modal-container">
        <div className="modal">
          <div className="modal-heading-container">
            <div className="modal-heading focus-in-expand-fwd">
              Instructions
            </div>
          </div>
          <ModalContext.Provider
            value={{ showNavHead, setShowNavHead, allstats }}
          >
            <ModalNav />
            <div className="modal-body">
              <NavHeads />
            </div>
          </ModalContext.Provider>
          <button className="Modal-button" onClick={props.hideModal}>
            PLAY GAME <SiGoogleplay />
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("ModalPortal")
  );
}

import React, { useContext } from "react";
import { BsClipboardData } from "react-icons/bs";
import { GiFireZone } from "react-icons/gi";
import { GoUnverified } from "react-icons/go";
import { HiViewList } from "react-icons/hi";
import { ModalContext } from "../Modal";
import "./ModalNav.css";

function ModalNav() {
  const { setShowNavHead } = useContext(ModalContext);

  return (
    <div className="Modal-Nav">
      <div className="modal-nav-content">
        <div
          className="nav-head"
          onClick={() => {
            setShowNavHead(1);
          }}
        >
          <span className="icon">
            <GoUnverified />
          </span>
          <span className="heading">How to PLAY</span>
        </div>
        <div
          className="nav-head"
          onClick={() => {
            setShowNavHead(2);
          }}
        >
          <span className="icon">
            <HiViewList />
          </span>
          <span className="heading">Example</span>
        </div>
        <div
          className="nav-head"
          onClick={() => {
            setShowNavHead(3);
          }}
        >
          <span className="icon">
            <GiFireZone />
          </span>
          <span className="heading">Score Rules</span>
        </div>
        <div
          className="nav-head"
          onClick={() => {
            setShowNavHead(4);
          }}
        >
          <span className="icon">
            <BsClipboardData />
          </span>
          <span className="heading">All Stats </span>
        </div>
      </div>
    </div>
  );
}

export default ModalNav;

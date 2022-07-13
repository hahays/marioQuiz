import React from "react";
import Chest from "../Chest/Chest";
import CHEST1 from "../../assets/chests/chest1.png";
import "./MarioHeader.css";

function MarioHeader() {
  return (
    <div className="message">
      <i class="nes-mario"></i>
      <Chest src={CHEST1} className="chestStart" />
    </div>
  );
}

export default MarioHeader;

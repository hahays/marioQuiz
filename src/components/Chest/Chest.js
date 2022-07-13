import React from "react";

import "./Chest.css";

function Chest({ className, src }) {
  return (
    <div className="message">
      <div className="chest-container">
        <img className={className} src={src} alt="img" />
      </div>
    </div>
  );
}

export default Chest;

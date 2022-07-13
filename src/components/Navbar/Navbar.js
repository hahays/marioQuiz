import React from "react";
import "./Navbar.css";

function Navbar({ className, header }) {
  return (
    <div className="is-dark navbar">
      <span className={className}> {header}</span>
    </div>
  );
}

export default Navbar;

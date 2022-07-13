import React from "react";

function Header({ src }) {
  return (
    <div>
      <a href="https://fontmeme.com/pixel-fonts/">
        <img src={src} alt="pixel-fonts" border="0" />
      </a>
    </div>
  );
}

export default Header;

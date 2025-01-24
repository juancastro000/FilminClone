import React from "react";
import logo from "../../../images/logo.png"

const Logo = () => {
  return (
    <div className="navbar__logo">
      <a className="link" href="/">
        <img src={logo} alt="Logo Filmin"/>
      </a>
    </div>
  );
};

export default Logo;
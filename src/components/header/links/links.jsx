import React from "react";
import DropdownMenu from "../dropmenu/dropmenu";

const Links = () => {
  return (
    <nav className="navbar__links">
      <a className="link" href="/">Inicio</a>
      <a className="link" href="../constructionPage/ConstructionPage.jsx">Cine</a>
      <a className="link" href="../constructionPage/ConstructionPage.jsx">Series</a>
      <DropdownMenu />
    </nav>
  );
};

export default Links;

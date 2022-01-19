import React from "react";
import Hamburger from "./Hamburger";
import NavMain from "./NavMain";

function Header() {
  return (
    <header className="flex justify-between align-center">
      <div>Logo</div>
      <NavMain />
      <Hamburger />
    </header>
  );
}

export default Header;

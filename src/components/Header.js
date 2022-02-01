import React from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import NavMain from "./NavMain";

function Header() {
  return (
    <header>
      <div className="header-content flex justify-between align-center">
        <Logo />
        <NavMain />
        <Hamburger />
      </div>
    </header>
  );
}

export default Header;

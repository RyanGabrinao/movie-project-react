import React from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import NavMain from "./NavMain";

function Header() {
  return (
    <header className="flex justify-between align-center">
      <Logo />
      <NavMain />
      <Hamburger />
    </header>
  );
}

export default Header;

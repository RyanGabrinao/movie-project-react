import React from "react";
import NavMain from "./NavMain";

function Header() {
  return (
    <header className="flex justify-between">
      <div>Logo</div>
      <NavMain />
    </header>
  );
}

export default Header;

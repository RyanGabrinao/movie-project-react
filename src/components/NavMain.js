import React from "react";
import { Link } from "react-router-dom";

function NavMain() {
  return (
    <nav className="main-nav">
      <ul className="flex">
        <li>
          <Link to="/">
            <span className="main-link">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <span className="main-link">About</span>
          </Link>
        </li>
        <li>
          <Link to="/favourites">
            <span className="main-link">Favourites</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMain;

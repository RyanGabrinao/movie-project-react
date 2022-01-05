import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>Logo</div>

      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/favourites">
            <li>Favourites</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

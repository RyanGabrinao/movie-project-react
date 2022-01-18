import React from "react";
import { Link } from "react-router-dom";

function NavSort() {
  return (
    <nav className="sort-navigation">
      <ul>
        <li>
          <Link to="/sort/popular">Popular</Link>
        </li>
        <li>
          <Link to="/sort/top-rated">Top Rated</Link>
        </li>
        <li>
          <Link to="/sort/now-playing">Now Playing</Link>
        </li>
        <li>
          <Link to="/sort/upcoming">Upcoming</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavSort;

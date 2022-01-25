import React from "react";
import { NavLink } from "react-router-dom";

function NavSort() {
  return (
    <nav className="sort-navigation">
      <ul className="flex justify-center align-center">
        <li>
          <NavLink
            to="/sort/popular"
            style={({ isActive }) => ({
              color: isActive ? "#b64dee" : "#fff",
            })}
          >
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sort/top-rated"
            style={({ isActive }) => ({
              color: isActive ? "#b64dee" : "#fff",
            })}
          >
            Top Rated
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sort/now-playing"
            style={({ isActive }) => ({
              color: isActive ? "#b64dee" : "#fff",
            })}
          >
            Now Playing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sort/upcoming"
            style={({ isActive }) => ({
              color: isActive ? "#b64dee" : "#fff",
            })}
          >
            Upcoming
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavSort;

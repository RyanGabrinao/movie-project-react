import React, { useState } from "react";
import ChevronDown from "./ChevronDown";
import ChevronUp from "./ChevronUp";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { NavLink } from "react-router-dom";

function NavSort() {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const { width } = useWindowDimensions();
  return (
    <nav className="sort-navigation">
      <div
        className="sort-by-container flex align-center"
        onClick={() => setIsSortOpen(!isSortOpen)}
      >
        <span className="sort-by">Sort By</span>
        {isSortOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      <ul className={isSortOpen && width <= 600 ? "show" : null}>
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

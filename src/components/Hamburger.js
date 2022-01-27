import React, { useState } from "react";
import { Link } from "react-router-dom";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobileNav">
      <button
        className="hamburgerBtn"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className={isOpen ? "hamburger animate" : "hamburger"}></div>
      </button>
      {isOpen && (
        <ul className="mobileNavLinks">
          <li>
            <Link
              to="/"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/favourites"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Favourites
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Hamburger;

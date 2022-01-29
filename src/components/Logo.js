import React from "react";
import { NavLink } from "react-router-dom";
import LogoHeader from "../images/Untitled-412.png";

function Logo() {
  return (
    <div className="logo-container">
      <NavLink to="/">
        <img src={LogoHeader} alt="" />
      </NavLink>
    </div>
  );
}

export default Logo;

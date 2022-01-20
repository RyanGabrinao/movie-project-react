import React, { useState } from "react";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className="hamburgerBtn"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className={isOpen ? "hamburger animate" : "hamburger"}></div>
    </button>
  );
}

export default Hamburger;

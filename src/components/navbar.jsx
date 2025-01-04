// src/components/Navbar.jsx
import React from "react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">KYBERNETX</div>
      <nav>
        <a href="#missions">Missions</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;

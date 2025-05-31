// src/components/Navbar.jsx
import { useState } from "react";

function Navbar() {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">KYBERNETX</div>
        <nav>
          <a 
            href="#home" 
            className={activeLink === "home" ? "active" : ""}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </a>
          <a 
            href="#products" 
            className={activeLink === "products" ? "active" : ""}
            onClick={() => handleLinkClick("products")}
          >
            Shop
          </a>
          <a 
            href="#about" 
            className={activeLink === "about" ? "active" : ""}
            onClick={() => handleLinkClick("about")}
          >
            About
          </a>
          <a 
            href="#contact" 
            className={activeLink === "contact" ? "active" : ""}
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </a>
          <a href="#cart" className="btn btn-outline">
            Cart (0)
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

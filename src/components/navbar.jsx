// src/components/Navbar.jsx
import { useState } from "react";

function Navbar({ activeSection = "home", setActiveSection = () => {} }) {
  const [cartCount] = useState(0);

  const handleLinkClick = (link, event) => {
    event.preventDefault();
    setActiveSection(link);
    
    // Smooth scroll to section
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">KYBERNETX</div>
        <nav>
          <a 
            href="#home" 
            className={activeSection === "home" ? "active" : ""}
            onClick={(e) => handleLinkClick("home", e)}
          >
            Home
          </a>
          <a 
            href="#products" 
            className={activeSection === "products" ? "active" : ""}
            onClick={(e) => handleLinkClick("products", e)}
          >
            Shop
          </a>
          <a 
            href="#about" 
            className={activeSection === "about" ? "active" : ""}
            onClick={(e) => handleLinkClick("about", e)}
          >
            About
          </a>
          <a 
            href="#contact" 
            className={activeSection === "contact" ? "active" : ""}
            onClick={(e) => handleLinkClick("contact", e)}
          >
            Contact
          </a>
          <button className="btn btn-outline cart-btn">
            🛒 Cart ({cartCount})
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

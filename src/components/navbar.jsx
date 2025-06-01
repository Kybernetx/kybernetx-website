// src/components/Navbar.jsx
import { useState } from "react";

function Navbar({ activeSection = "home", setActiveSection = () => {} }) {
  const [cartCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (link, event) => {
    event.preventDefault();
    setActiveSection(link);
    
    // Close mobile menu when link is clicked
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <>
      <header className="navbar">
        <div className="container">
          <div className="logo">KYBERNETX</div>
          
          {/* Desktop Navigation */}
          <nav className={`${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
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

          {/* Mobile Menu Toggle Button */}
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div 
          className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
}

export default Navbar;

// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>KYBERNETX</h3>
            <p>
              Leading the future of AI-powered manufacturing and automation solutions. 
              Transforming industries through intelligent technology.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Products</h3>
            <ul>
              <li><a href="#manufacturing">Manufacturing AI</a></li>
              <li><a href="#automation">Automation Systems</a></li>
              <li><a href="#custom">Custom Solutions</a></li>
              <li><a href="#support">Support & Training</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#news">News & Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#documentation">Documentation</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 Kybernetx. All Rights Reserved. | Powered by AI Innovation</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

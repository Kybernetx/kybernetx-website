// src/components/Hero.jsx
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>AI-Powered E-Commerce Solutions</h1>
          <p>
            Discover cutting-edge AI products and custom solutions designed to revolutionize 
            your business operations. From intelligent manufacturing tools to advanced automation systems.
          </p>
          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary">
              Shop Now
            </a>
            <a href="#about" className="btn btn-outline">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

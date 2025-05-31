// src/components/FeaturedProducts.jsx
function FeaturedProducts() {
  const featuredProducts = [
    {
      id: 1,
      name: "AI Manufacturing Suite",
      description: "Complete AI-powered manufacturing automation system with predictive maintenance and quality control.",
      price: "$2,999",
      icon: "🏭",
      features: ["Predictive Maintenance", "Quality Control", "Real-time Analytics"]
    },
    {
      id: 2,
      name: "Rocket Assembly AI",
      description: "Precision AI system for aerospace component assembly with zero-defect manufacturing protocols.",
      price: "$4,999",
      icon: "🚀",
      features: ["Zero-Defect Assembly", "Precision Control", "Safety Protocols"]
    },
    {
      id: 3,
      name: "Custom AI Solutions",
      description: "Tailored AI implementations designed specifically for your unique business requirements.",
      price: "Contact Us",
      icon: "⚙️",
      features: ["Custom Development", "24/7 Support", "Enterprise Integration"]
    }
  ];

  const handleAddToCart = (productId, productName) => {
    alert(`Added "${productName}" to cart! (Cart functionality coming soon)`);
  };
  return (
    <section className="products-section" id="products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured AI Products</h2>
          <p className="section-subtitle">
            Explore our cutting-edge AI solutions designed to transform your business operations
            and drive unprecedented efficiency.
          </p>
        </div>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-icon">
                {product.icon}
              </div>
              <h3 className="product-title">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <ul className="product-features">
                {product.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
              <div className="product-price">{product.price}</div>
              <button 
                className="btn btn-primary product-btn"
                onClick={() => handleAddToCart(product.id, product.name)}
              >
                {product.price === "Contact Us" ? "Get Quote" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;

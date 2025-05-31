// src/components/FeaturedProducts.jsx
function FeaturedProducts() {
  const featuredProducts = [
    {
      id: 1,
      name: "AI Manufacturing Suite",
      description: "Complete AI-powered manufacturing automation system with predictive maintenance and quality control.",
      price: "$2,999",
      image: "/images/manufacturing.webp"
    },
    {
      id: 2,
      name: "Rocket Assembly AI",
      description: "Precision AI system for aerospace component assembly with zero-defect manufacturing protocols.",
      price: "$4,999",
      image: "/images/rocket-assembly.webp"
    },
    {
      id: 3,
      name: "Custom AI Solutions",
      description: "Tailored AI implementations designed specifically for your unique business requirements.",
      price: "Contact Us",
      image: "/images/hero-bg.webp"
    }
  ];

  return (
    <section className="section products-section" id="products">
      <div className="container">
        <div className="text-center">
          <h2>Featured AI Products</h2>
          <p>
            Explore our cutting-edge AI solutions designed to transform your business operations
            and drive unprecedented efficiency.
          </p>
        </div>
          <div className="products-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-image"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="product-image product-image-placeholder" style={{display: 'none'}}>
                  AI Product
                </div>
              </div>
              <h3 className="product-title">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-price">{product.price}</div>
              <div className="flex gap-1">
                <button className="btn btn-primary">
                  {product.price === "Contact Us" ? "Get Quote" : "Add to Cart"}
                </button>
                <button className="btn btn-outline">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;

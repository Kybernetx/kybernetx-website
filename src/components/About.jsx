// src/components/About.jsx
function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <div className="grid grid-2 gap-3">
          <div>
            <h2>About Kybernetx</h2>
            <p>
              We are pioneers in AI-powered solutions, specializing in intelligent manufacturing 
              and automation systems. Our cutting-edge technology transforms traditional 
              industrial processes into smart, efficient, and predictive operations.
            </p>
            <p>
              Founded by experts in artificial intelligence and manufacturing, Kybernetx bridges 
              the gap between advanced AI research and practical industrial applications. 
              We believe in creating solutions that not only solve today's challenges but 
              anticipate tomorrow's opportunities.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>99.9%</h3>
                <p>System Uptime</p>
              </div>
              <div className="stat-item">
                <h3>24/7</h3>
                <p>Support Available</p>
              </div>
            </div>
          </div>
          <div className="about-features">
            <h3>Why Choose Kybernetx?</h3>
            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-icon">🤖</span>
                <div>
                  <h4>Advanced AI Technology</h4>
                  <p>Cutting-edge machine learning algorithms designed for industrial applications</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔧</span>
                <div>
                  <h4>Custom Solutions</h4>
                  <p>Tailored AI implementations that fit your specific business requirements</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <div>
                  <h4>Real-time Analytics</h4>
                  <p>Comprehensive monitoring and insights to optimize your operations</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🛡️</span>
                <div>
                  <h4>Enterprise Security</h4>
                  <p>Bank-level security protocols to protect your sensitive data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

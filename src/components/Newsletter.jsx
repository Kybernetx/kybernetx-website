// src/components/Newsletter.jsx
import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log("Newsletter subscription:", email);
      setIsSubscribed(true);
      setEmail("");
      
      // Reset the success message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="newsletter-section" id="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-header">
            <div className="newsletter-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <h2>Stay Ahead with AI Innovations</h2>
            <p>
              Join thousands of industry leaders getting exclusive insights, product updates, 
              and early access to breakthrough AI solutions delivered to your inbox.
            </p>
          </div>

          <div className="newsletter-benefits">
            <div className="benefit-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              <span>Weekly AI industry insights</span>
            </div>
            <div className="benefit-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              <span>Exclusive product previews</span>
            </div>
            <div className="benefit-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              <span>Early bird pricing offers</span>
            </div>
          </div>

          {isSubscribed ? (
            <div className="success-message">
              <div className="success-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
              </div>
              <h3>Welcome to the AI Revolution!</h3>
              <p>Thank you for subscribing! Check your email for confirmation and get ready for exclusive AI insights.</p>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="form-input-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input"
                  required
                  aria-label="Email address for newsletter subscription"
                />
                <button type="submit" className="btn btn-accent">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22,2 15,22 11,13 2,9 22,2"/>
                  </svg>
                  Subscribe
                </button>
              </div>
              <p className="newsletter-disclaimer">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Newsletter;

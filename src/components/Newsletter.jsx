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
    <section className="newsletter-section">
      <div className="container">
        <h2>Stay Updated with AI Innovations</h2>
        <p>
          Get the latest updates on AI technology, product releases, and exclusive offers 
          delivered straight to your inbox.
        </p>
        
        {isSubscribed ? (
          <div className="text-center">
            <p style={{ color: 'var(--color-accent)', fontSize: '1.1rem', fontWeight: '600' }}>
              🎉 Thank you for subscribing! Check your email for confirmation.
            </p>
          </div>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
              required
              aria-label="Email address for newsletter subscription"
            />
            <button type="submit" className="btn btn-secondary">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Newsletter;

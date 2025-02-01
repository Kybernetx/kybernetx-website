// src/components/Missions.jsx
import React from 'react';

function Missions() {
  return (
    <section className="missions" id="missions">
      <h2>Missions</h2>
      <div className="missions-grid">
        <div className="mission-item">
          <img src="/images/rocket-assembly.webp" alt="AI Rocket Assembly" />
          <h3>AI for Rocket Assembly</h3>
          <p>Our specialized agents ensure precision assembly of critical components.</p>
        </div>

        <div className="mission-item">
          <img src="/images/manufacturing.webp" alt="AI Manufacturing" />
          <h3>Automated Manufacturing</h3>
          <p>Seamless integration of AI into the production line, optimizing throughput.</p>
        </div>

        {/* Add more items as needed */}
      </div>
    </section>
  );
}

export default Missions;

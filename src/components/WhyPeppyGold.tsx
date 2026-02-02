
import React from 'react';
// Import your icons here if you have them, otherwise we use emojis/CSS
// import shieldIcon from '../assets/icons/shield.png'

export default function WhyPeppyGold() {
  return (
    <section className="pg-why-bento" id="why-peppy">
      <div className="pg-bento-header">
        <p className="pg-bento-subtitle">✨ The Peppy Advantage ✨</p>
        <h2 className="pg-bento-title">Why Choose Peppy Gold?</h2>
      </div>

      <div className="pg-bento-container">
        {/* LARGE CARD: TRUST & SECURITY */}
        <div className="pg-bento-card pg-card-large">
          <div className="pg-card-icon">🛡️</div>
          <h3>Bank-Grade Security</h3>
          <p>Your gold is stored in 100% insured, SEBI-regulated vaults with 24/7 monitoring. We partner only with certified, hallmarked jewellers.</p>
          <div className="pg-card-tag">Most Trusted</div>
        </div>

        {/* SMALL CARD: ZERO FEES */}
        <div className="pg-bento-card pg-card-small">
          <div className="pg-card-icon">🏷️</div>
          <h3>0% Platform Fees</h3>
          <p>No hidden charges. Every rupee goes into your gold.</p>
        </div>

        {/* SMALL CARD: LIVE TRACKING */}
        <div className="pg-bento-card pg-card-small">
          <div className="pg-card-icon">📈</div>
          <h3>Live Tracking</h3>
          <p>Real-time updates on your gold savings value.</p>
        </div>

        {/* WIDE CARD: FLEXIBILITY */}
        <div className="pg-bento-card pg-card-wide">
          <div className="pg-card-icon">📊</div>
          <div className="pg-wide-content">
            <h3>Flexible Saving Plans</h3>
            <p>Start with as little as ₹10. Daily, weekly, or monthly—you choose how you grow your wealth.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
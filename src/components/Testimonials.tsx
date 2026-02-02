import { useState } from 'react';

const testimonials = [
  { text: 'This app really good and easy to use... lots of offers and rewards in it .. so I highly recommend.. good app for saving gold.. 👍', name: 'Emmanal Emman', role: 'Verified User' },
  { text: 'Very smooth experience. Easy payments and trustworthy platform. Highly recommend for digital gold.', name: 'Jaya Sri', role: 'Gold Saver' },
  { text: 'Best app for systematic gold savings. The security features give me real peace of mind.', name: 'Ramesh Kumar', role: 'Verified User' },
  { text: 'Simple UI and transparent pricing. No hidden charges at all. Loved it!', name: 'Priya S', role: 'Monthly Saver' },
  { text: 'Gold saving made easy for everyone. Even with small amounts, I can grow my wealth.', name: 'Suresh', role: 'Verified User' },
  { text: 'Great support team and easy onboarding. The best way to save for the future.', name: 'Anitha', role: 'New User' },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="pg-testimonials-v2">
      <div className="test-header">
        <span className="test-badge">Wall of Love</span>
        <h2 className="test-title">Trusted by <span>Thousands</span></h2>
      </div>

      <div className="test-container">
        {/* Navigation Arrows */}
        <div className="test-nav-layer">
          <button className="nav-circle prev" onClick={prev}>←</button>
          <button className="nav-circle next" onClick={next}>→</button>
        </div>

        {/* The Main Stage */}
        <div className="test-stage">
          {testimonials.map((item, i) => {
            let position = "next-card";
            if (i === index) position = "active-card";
            if (i === (index - 1 + testimonials.length) % testimonials.length) position = "prev-card";

            return (
              <div key={i} className={`test-card-new ${position}`}>
                <div className="quote-icon">“</div>
                <div className="star-rating">⭐⭐⭐⭐⭐</div>
                <p className="test-msg">{item.text}</p>
                <div className="test-user-info">
                  <div className="user-avatar">{item.name.charAt(0)}</div>
                  <div className="user-details">
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Pagination Dots */}
      <div className="test-dots">
        {testimonials.map((_, i) => (
          <div key={i} className={`dot ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)}></div>
        ))}
      </div>
    </section>
  );
}
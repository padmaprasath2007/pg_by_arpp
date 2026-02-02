import { useState } from 'react';

const partners = [
  { 
    quote: "Peppy Gold's platform has revolutionized how we connect with digital-first savers.", 
    brand: "AGS Thangamaaligai", 
    location: "Tamil Nadu" 
  },
  { 
    quote: "A transparent and highly secure ecosystem for the bullion industry.", 
    brand: "Priyanka Bullion", 
    location: "Global" 
  },
  { 
    quote: "The future of gold savings is here, and it's powered by Peppy Gold.", 
    brand: "Sri Kamalam Jewellery", 
    location: "South India" 
  },
  { 
    quote: "Their commitment to security and transparency is unmatched in the market.", 
    brand: "Garudaa Gold", 
    location: "Regional" 
  }
];

export default function PartnersSay() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((index - 1 + partners.length) % partners.length);
  };

  const next = () => {
    setIndex((index + 1) % partners.length);
  };

  const current = partners[index];

  return (
    <section className="ps-slider-section">
      <h2 className="ps-slider-title">What Our <span>Partners Say</span></h2>

      <div className="ps-slider-wrapper">
        <button className="ps-arrow-btn" onClick={prev}>
          ←
        </button>

        <div className="ps-slider-card">
          <div className="ps-quote-icon">“</div>
          <p className="ps-quote-text">{current.quote}</p>
          
          <div className="ps-partner-info">
            <div className="ps-partner-avatar">
              {current.brand.charAt(0)}
            </div>
            <div className="ps-partner-details">
              <h4>{current.brand}</h4>
              <span>{current.location}</span>
            </div>
          </div>
        </div>

        <button className="ps-arrow-btn" onClick={next}>
          →
        </button>
      </div>

      {/* Slide Indicators (Dots) */}
      <div className="ps-slider-dots">
        {partners.map((_, i) => (
          <span 
            key={i} 
            className={`ps-dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
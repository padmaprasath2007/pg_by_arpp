import benefitsImage from '../assets/benefits/benefits-image.png';

export default function UserBenefits() {
  const benefitData = [
    { tag: "Market Leader", title: "India’s First Aggregator", desc: "The pioneer in gold savings aggregation tech." },
    { tag: "Entry Level", title: "Start with ₹100", desc: "Gold savings accessible for every Indian household." },
    { tag: "Smart Choice", title: "Compare Jewellers", desc: "Transparency to choose the best rates and trust." },
    { tag: "Zero Interest", title: "Price Lock Advantage", desc: "Lock today's gold price and pay at your convenience." },
    { tag: "Cost Saver", title: "Save 50% on Charges", desc: "Massive reduction in wastage and making charges." },
    { tag: "Flexibility", title: "Monthly & One-Time", desc: "Savings plans that adapt to your financial rhythm." }
  ];

  return (
    <section className="premium-benefits-stack">
      <div className="stack-bg-glow"></div>
      
      <div className="stack-grid">
        {/* VISUAL PANEL */}
        <div className="visual-panel">
          <div className="floating-frame">
            <img src={benefitsImage} alt="Peppy Gold Benefits" />
            <div className="benefit-counter">
              <span className="count-num">10+</span>
              <span className="count-label">Wealth Pillars</span>
            </div>
          </div>
        </div>

        {/* INTERACTIVE STRIPS PANEL */}
        <div className="strips-panel">
          <div className="panel-header">
            <h2 className="glitch-title">Why Peppy <span>Gold?</span></h2>
            <p>Redefining how India saves, one gram at a time.</p>
          </div>

          <div className="benefits-accordion">
            {benefitData.map((benefit, i) => (
              <div key={i} className="benefit-strip">
                <div className="strip-index">0{i + 1}</div>
                <div className="strip-body">
                  <span className="strip-tag">{benefit.tag}</span>
                  <h3 className="strip-title">{benefit.title}</h3>
                  <p className="strip-desc">{benefit.desc}</p>
                </div>
                <div className="strip-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
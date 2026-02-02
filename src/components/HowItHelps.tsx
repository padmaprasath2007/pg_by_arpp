export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Quick Registration",
      desc: "Complete your KYC in under 2 minutes and start saving gold with total confidence."
    },
    {
      num: "02",
      title: "Smart Loading",
      desc: "Add funds to your secure gold wallet instantly via UPI, Net Banking, or Debit Cards."
    },
    {
      num: "03",
      title: "Goal Management",
      desc: "Monitor your growth with real-time analytics and set goals to boost your future success."
    }
  ];

  return (
    <section className="hiw-section-v2" id="howitworks">
      <div className="hiw-container">
        <div className="hiw-header">
          <span className="hiw-badge">Simple Process</span>
          <h2 className="hiw-title">How It <span>Works</span></h2>
        </div>

        <div className="hiw-grid">
          {steps.map((step, index) => (
            <div key={index} className="hiw-card">
              <div className="hiw-number-wrapper">
                <span className="hiw-big-number">{step.num}</span>
                <div className="hiw-number-line"></div>
              </div>
              <div className="hiw-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
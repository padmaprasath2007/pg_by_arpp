export default function Board() {
  const directors = [
    { name: "Mr. Arun Pradeep", role: "Founder & CEO, Global" },
    { name: "Mr. Emmanuel Mani", role: "Co-Founder & CTO, Global" },
    { name: "Mr. Ravindran Subramaniam", role: "Co-Founder & Head of Client Engagements, USA" },
    { name: "Mrs. Tabitha Emmanuel", role: "Co-Founder & Head of Security & Compliances, Global" },
    { name: "Mr. Praveen Kumar", role: "Regional Head of Business Development, India" }
  ];

  const advisors = [
    { name: "Mr. CR Venkatesh (CRV)", role: "Founder & CEO - Dot Com Infoway" },
    { name: "Mr. Sethuraman Sathappan", role: "COO (Retired) - Emirates NBD Bank, India" },
    { name: "Mrs. Ramadevi S", role: "Founder and CEO of Elangi Thanga Maaligai" }
  ];

  return (
    <section className="pg-board-section">
      {/* Header */}
      <div className="board-header">
        <span className="board-eyebrow">Leadership</span>
        <h2 className="board-main-title">Board of <span>Directors</span></h2>
      </div>

      <div className="board-grid-container">
        {directors.map((member, i) => (
          <div key={i} className="board-profile-card">
            <div className="card-accent"></div>
            <div className="profile-content">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Advisory Header */}
      <div className="board-header advisory-gap">
        <span className="board-eyebrow">Strategic Guidance</span>
        <h2 className="board-main-title">Advisory <span>Board</span></h2>
      </div>

      <div className="board-grid-container advisory-grid">
        {advisors.map((member, i) => (
          <div key={i} className="board-profile-card advisor-card">
            <div className="profile-content">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
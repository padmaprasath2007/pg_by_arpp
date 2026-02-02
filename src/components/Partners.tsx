
import partner1 from '../assets/partners/priyanka.png';
import partner2 from '../assets/partners/g.png';
import partner3 from '../assets/partners/ags.png';
import partner4 from '../assets/partners/others.png';

export default function Partners() {
  const logos = [partner1, partner2, partner3, partner4];

  return (
    <section className="pg-partners-v2" id="partners">
      <div className="partners-v2-header">
        <h2 className="partners-v2-title">Our Trusted <span>Partners</span></h2>
        <p className="partners-v2-subtitle">Collaborating with the finest in the industry.</p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-fade-left"></div>
        <div className="marquee-fade-right"></div>
        
        <div className="marquee-track">
          {/* Tripled the logos to ensure a long, clear loop without gaps */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div className="partner-capsule-large" key={index}>
              <img src={logo} alt={`Partner logo`} className="partner-brand-clear" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
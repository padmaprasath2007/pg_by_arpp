import qrAndroid from "../assets/qr-android.png";
import qriOS from "../assets/qr-ios.png";
import peppyLogo from "../assets/logo/peppy-logo.png";

export default function Footer() {
  return (
    <footer className="pg-footer-new">
      <div className="footer-glow-top"></div>
      
      <div className="footer-grid">
        {/* BRAND & CALL TO ACTION */}
        <div className="footer-brand-column">
          <img src={peppyLogo} alt="Peppy Gold" className="footer-logo-main" />
          <h3 className="footer-motto">
            Invest in <span>Peppy Gold</span> with Confidence, and Safeguard Your Future.
          </h3>
          <p className="footer-offer-tag">Premium Offers & Schemes Available.</p>
          
          <button className="footer-cta-btn" onClick={() => window.open('https://play.google.com/store', '_blank')}>
            Start Your Journey Today
          </button>

          <div className="app-download-section">
            <div className="qr-item">
              <img src={qrAndroid} alt="Android QR" />
              <span>Android</span>
            </div>
            <div className="qr-item">
              <img src={qriOS} alt="iOS QR" />
              <span>iOS App</span>
            </div>
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="footer-links-column">
          <div className="links-group">
            <h4>Quick Links</h4>
            <a href="#">How It Works</a>
            <a href="#">Frequently Asked Questions</a>
            <a href="#">Partner With Us</a>
          </div>
          <div className="links-group">
            <h4>Legal Compliance</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <p className="gst-tag">GSTIN: <strong>33AAPCP5394N1ZL</strong></p>
          </div>
        </div>

        {/* OFFICE LOCATIONS */}
        <div className="footer-address-column">
          <div className="address-item">
            <h4>Head Office (Madurai)</h4>
            <p>94/19, Mani Kothonar Street, Bypass Road, Madurai, TN – 625016</p>
          </div>
          <div className="address-item">
            <h4>Corporate Office (Chennai)</h4>
            <p>No. 56, Radhakrishnan Salai, Valasaravakkam, Chennai, TN – 600087</p>
          </div>
          <div className="address-item">
            <h4>Global Office (USA)</h4>
            <p>15901 Rolater Rd, Suite #402, Frisco, TX 75035, USA</p>
          </div>
        </div>

        {/* CONTACT & SOCIALS */}
        <div className="footer-contact-column">
          <h4>Support & Contact</h4>
          <a href="tel:+919600898971" className="contact-link">📞 +91 9600898971</a>
          <a href="mailto:support@peppygold.com" className="contact-link">✉️ support@peppygold.com</a>
          <div className="social-tray">
             <a href="#" className="social-icon">🐦</a>
             <a href="#" className="social-icon">💼</a>
             <a href="#" className="social-icon">📸</a>
             <a href="#" className="social-icon">📘</a>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© 2026 Peppy Gold Technologies. All rights reserved. | Designed for Excellence</p>
      </div>
    </footer>
  );
}
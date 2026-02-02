import React from 'react';
import startupIndia from '../assets/certifications/startup-india.png';
import dunsCert from '../assets/certifications/duns.png';
import dunsQR from '../assets/certifications/duns-qr.png';

export default function Certifications() {
  return (
    <section className="pg-cert-section">
      <div className="cert-header">
        <span className="cert-badge">Official Recognition</span>
        <h2 className="cert-main-title">Trust & <span>Compliance</span></h2>
      </div>

      <div className="cert-bento-grid">
        {/* Startup India Card */}
        <div className="cert-glass-card">
          <div className="cert-visual-large">
            <img src={startupIndia} alt="Startup India Certificate" className="cert-full-view" />
          </div>
          <div className="cert-text">
            <h3>Startup India Recognition</h3>
            <p>Officially recognized by DPIIT, validating our innovative digital gold ecosystem.</p>
          </div>
        </div>

        {/* DUNS Card */}
        <div className="cert-glass-card">
          <div className="cert-visual-large duns-flex">
            <img src={dunsCert} alt="D-U-N-S Certificate" className="cert-full-view" />
            <div className="qr-highlight-box">
              <img src={dunsQR} alt="DUNS QR" className="cert-qr-large" />
              <span>SCAN TO VERIFY</span>
            </div>
          </div>
          <div className="cert-text">
            <h3>D-U-N-S® Registered</h3>
            <p><strong>D-U-N-S No: 77-267-8924.</strong> Verified global business identity for absolute transparency.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
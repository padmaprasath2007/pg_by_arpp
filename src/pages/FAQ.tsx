import { useState } from 'react';

const faqsUser = [
  { q: 'What is the minimum amount required to start saving?', a: 'You can start saving in gold with as little as ₹100.' },
  { q: 'What types of gold saving schemes are available?', a: 'One-time, monthly, anytime, and product-based saving schemes are available.' },
  { q: 'Are there any hidden fees?', a: 'No. Peppy Gold has zero hidden charges. Transparency is our core value.' },
  { q: 'Are there any platform charges for jewellers?', a: 'No platform charges are applied to jewellers.' },
];

const faqsPartner = [
  { q: 'How do I become a partner?', a: 'You can contact Peppy Gold through the Partner With Us section or email our onboard team.' },
  { q: 'What are the benefits for partners?', a: 'Partners gain access to a wider digital customer base and advanced inventory tools.' },
  { q: 'Is there a setup fee?', a: 'No setup fee is required. We grow when you grow.' },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`pg-faq-card ${open ? 'is-open' : ''}`}>
      <button className="pg-faq-question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <div className="faq-icon-box">{open ? '−' : '+'}</div>
      </button>
      <div className="pg-faq-answer">
        <div className="answer-inner">{a}</div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [activeTab, setActiveTab] = useState<'user' | 'partner'>('user');

  return (
    <section className="pg-faq-section" id="faq">
      <div className="faq-header">
        <span className="faq-badge">Support Center</span>
        <h2 className="faq-title">Any <span>Questions?</span></h2>
        
        {/* Tab Switcher */}
        <div className="faq-tabs">
          <button 
            className={`tab-btn ${activeTab === 'user' ? 'active' : ''}`}
            onClick={() => setActiveTab('user')}
          >
            For Users
          </button>
          <button 
            className={`tab-btn ${activeTab === 'partner' ? 'active' : ''}`}
            onClick={() => setActiveTab('partner')}
          >
            For Partners
          </button>
        </div>
      </div>

      <div className="faq-list-container">
        {(activeTab === 'user' ? faqsUser : faqsPartner).map((item, i) => (
          <FAQItem key={i} q={item.q} a={item.a} />
        ))}
      </div>
    </section>
  );
}
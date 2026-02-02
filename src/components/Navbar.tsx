import peppyLogo from '../assets/logo/peppy-logo.png';

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-wrapper">
      <div className="navbar-content">
        
        {/* Island 1: Logo */}
        <div className="glass-island logo-island">
          <button className="nav-btn-link" onClick={() => scrollToSection('top')}>
            <img src={peppyLogo} alt="Peppy Gold" className="navbar-logo" />
          </button>
        </div>

        {/* Island 2: Navigation Links */}
        <nav className="glass-island nav-island">
          <button className="nav-link-btn" onClick={() => scrollToSection('top')}>Home</button>
          <button className="nav-link-btn" onClick={() => scrollToSection('howitworks')}>How It Works</button>
          <button className="nav-link-btn" onClick={() => scrollToSection('partners')}>Partners</button>
          <button className="nav-link-btn" onClick={() => scrollToSection('faq')}>FAQ</button>
        </nav>

        {/* Island 3: Price & Action */}
        <div className="glass-island action-island">
          <div className="price-container">
            <div className="price-tag gold">Gold: ₹6258/gm</div>
            <div className="price-tag silver">Silver: ₹80/gm</div>
          </div>
          <button
            className="get-started-btn"
            onClick={() => window.open('https://play.google.com/store/apps/details?id=com.peppygold.user', '_blank')}
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
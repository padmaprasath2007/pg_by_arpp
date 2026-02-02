import { Link } from 'react-router-dom'
import peppyLogo from '../assets/logo/peppy-logo.png'

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <div className="navbar-content">
        
        {/* Island 1: Logo */}
        <div className="glass-island logo-island">
          <Link to="/">
            <img src={peppyLogo} alt="Peppy Gold" className="navbar-logo" />
          </Link>
        </div>

        {/* Island 2: Navigation Links */}
        <nav className="glass-island nav-island">
          <Link to="/#why" className="nav-link">Why Peppy Gold</Link>
          <Link to="/#how-it-helps" className="nav-link">How It Helps</Link>
          <Link to="/faq" className="nav-link">FAQ</Link>
          <Link to="/#partners" className="nav-link">Partners</Link>
        </nav>

        {/* Island 3: Price & Action */}
        <div className="glass-island action-island">
          <div className="price-tag gold">
            <span>Gold price: ₹6258/gm</span>
          </div>
          <div className="price-tag silver">
            <span>Silver price: ₹80/gm</span>
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
  )
}
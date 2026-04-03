import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <img src="/logo.jpg" alt="Radiant Cleaning & Pest Control" className="navbar-logo-img" />
        </Link>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/services', label: 'Services' },
            { to: '/clients', label: 'Clients' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

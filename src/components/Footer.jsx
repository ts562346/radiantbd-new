import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3 className="footer-logo">RADIANT</h3>
          <p className="footer-tagline">Cleaning &amp; Pest Control</p>
          <p className="footer-desc">
            Professional cleaning &amp; pest control services since 1993.
            Quality service that reflects our commitment to a cleaner, healthier environment.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/clients">Clients</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-services">
          <h4>Our Services</h4>
          <ul>
            <li>Office Cleaning</li>
            <li>Residential Cleaning</li>
            <li>Curtain Wall Maintenance</li>
            <li>After-Construction Cleaning</li>
            <li>Janitorial &amp; Staff Supply</li>
            <li>Pest Control</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📍 H-92, 1st Floor, New Airport Road<br />Banani, Dhaka-1213</p>
          <p>📞 9885167 | 9872027<br />017300-05001<br />017115-20291</p>
          {/* <p>📠 Fax: 88-02-8401791</p> */}
          <p>✉️ rcm92@hotmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Radiant Cleaning &amp; Pest Control. All rights reserved. | Est. 1993</p>
      </div>
    </footer>
  );
}

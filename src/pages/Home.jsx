import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import FeatureCard from '../components/FeatureCard';
import './Home.css';

const services = [
  { icon: '🏢', title: 'Office Cleaning', description: 'Professional daily, weekly, or monthly office cleaning tailored to your schedule and requirements.' },
  { icon: '🏠', title: 'Residential Cleaning', description: 'Thorough home cleaning services keeping your living space spotless and hygienic.' },
  { icon: '🪟', title: 'Curtain Wall Maintenance', description: 'Specialist high-rise facade and curtain wall cleaning using modern techniques and equipment.' },
  { icon: '🔨', title: 'After-Construction Cleaning', description: 'Complete post-construction clean-ups removing dust, debris, and construction residue.' },
  { icon: '🧹', title: 'Janitorial & Staff Supply', description: 'Full-time or part-time janitorial staff supply with trained, vetted, and uniformed cleaners.' },
  { icon: '🐛', title: 'Pest Control', description: 'Comprehensive pest management including insecticidal fogging of closed and open areas.' },
];

const features = [
  { icon: '✅', title: 'Satisfaction Guaranteed', description: 'Not happy? We re-clean at no additional charge — your satisfaction is our priority.' },
  { icon: '👔', title: 'Uniformed & Vetted Staff', description: 'All employees are background-checked, thoroughly trained, and wear uniforms for easy identification.' },
  { icon: '📱', title: 'Fast Response', description: 'On-site supervisors with mobile phones respond within 10–15 minutes to any concern.' },
  { icon: '🔒', title: 'Fully Insured', description: 'We are fully bonded and carry worker\'s compensation insurance on all employees.' },
];

export default function Home() {
  return (
    <div className="home">
      <SEO
        path="/"
        description="Radiant Cleaning & Pest Control — Bangladesh's trusted professional cleaning company in Dhaka since 1993. Office cleaning, residential cleaning, pest control, curtain wall, after-construction. Call 01730-05001."
        keywords="cleaning service Dhaka, professional cleaning Dhaka, pest control Dhaka, office cleaning Bangladesh, cleaning company Banani Dhaka"
      />
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Established 1993 · 600+ Trained Staff</span>
          <h1>Bangladesh's Trusted<br />Cleaning &amp; Pest Control Experts</h1>
          <p>
            RADIANT delivers ultra-modern, scientific cleaning and pest control and support staff services
            for commercial buildings, offices, and large facilities — all at competitive prices.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn btn-primary">Explore Services</Link>
            <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">30+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat-number">600+</span>
            <span className="stat-label">Trained Staff</span>
          </div>
          <div className="stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Satisfaction</span>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section services-section">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive cleaning and pest control solutions for every need</p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
        <div className="section-cta">
          <Link to="/services" className="btn btn-primary">View All Services</Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-section">
        <div className="section-inner">
          <div className="section-header">
            <h2>Why Choose RADIANT?</h2>
            <p>Our commitment to quality has made us Bangladesh's most reliable cleaning partner since 1993</p>
          </div>
          <div className="features-grid">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission Strip */}
      <section className="mission-strip">
        <div className="mission-content">
          <h2>"Our Reputation Since 1993 Speaks for Itself"</h2>
          <p>
            Committed to supplying the business community with consistent quality cleaning and
            maintenance services at below-market prices. Unequaled in service, response time, and value.
          </p>
          <Link to="/about" className="btn btn-white">Learn About Us</Link>
        </div>
      </section>

      {/* Clients Teaser */}
      <section className="section clients-teaser">
        <div className="section-header">
          <h2>Trusted By Leading Organisations</h2>
          <p>From national banks to universities, RADIANT serves Bangladesh's most respected institutions</p>
        </div>
        <div className="client-logos">
          <div className="client-chip">🏦 Premier Bank Ltd.</div>
          <div className="client-chip">🎓 University of Liberal Arts Bangladesh</div>
          <div className="client-chip">🏢 South Breeze</div>
          <div className="client-chip">🏗️ Many More…</div>
        </div>
        <div className="section-cta">
          <Link to="/clients" className="btn btn-outline-green">See All Clients</Link>
        </div>
      </section>
    </div>
  );
}

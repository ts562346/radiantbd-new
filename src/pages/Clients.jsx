import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import './Clients.css';

const clientCategories = [
  {
    category: 'High Rise Commercial Buildings',
    icon: '🏙️',
    clients: [
      { name: 'Safura Tower', detail: '20, Kamal Ataturk Avenue, Banani, Dhaka' },
      { name: 'Shuvastu Tower', detail: '69/1, Panthapath Green Road, Dhaka' },
      { name: 'Iqbal Center', detail: 'Kamal Ataturk Avenue, Banani, Dhaka' },
      { name: 'South Breeze Center', detail: 'Banani, Dhaka' },
    ],
  },
  {
    category: 'Educational Institutions',
    icon: '🎓',
    clients: [
      { name: 'United International University (UIU)', detail: 'United City, R/A, Dhaka' },
      { name: 'London School', detail: 'Dhanmondi R/A, Dhaka' },
      { name: 'University of Liberal Arts Bangladesh', detail: 'Campus-2, Dhanmondi, Dhaka' },
      { name: 'Eastern University', detail: 'Dhanmondi R/A, Dhaka' },
      { name: 'The Grenada Academy', detail: 'Nayakanda, Manikgonj' },
    ],
  },
  {
    category: 'Financial Institutions',
    icon: '🏦',
    clients: [
      { name: 'Premier Bank Ltd.', detail: 'All Branches in Bangladesh' },
      { name: 'Lanka Bangla Finance Ltd.', detail: 'Safura Tower, Banani' },
    ],
  },
  {
    category: 'Business Organizations & Offices',
    icon: '🏢',
    clients: [
      { name: 'Universal Business Machines', detail: '2nd Floor, Safura Tower, Banani' },
      { name: 'Bengal Airlifts Ltd.', detail: '4th Floor, Landmark Building, Gulshan-2' },
      { name: 'Everett BD. Ltd.', detail: 'Shuvastu Tower, Panthapath' },
      { name: 'Shanta Properties Ltd.', detail: 'Safura Tower, Banani' },
      { name: 'STS Group', detail: 'Gulshan-1, Dhaka' },
      { name: 'Green Delta Securities Ltd.', detail: 'Motijheel C/A, Dhaka' },
      { name: 'Bergen Engines Ltd.', detail: 'Banani, Dhaka' },
      { name: 'Nest Assets Ltd.', detail: 'Gulshan-1, Dhaka' },
      { name: 'SBT Japan', detail: 'Banani, Dhaka' },
      { name: 'BJ Textile', detail: 'Gulshan, Dhaka' },
      { name: 'Zemcon Group', detail: 'Dhanmondi, Dhaka' },
      { name: 'Hossaf Power', detail: 'Mohakhali, Dhaka' },
      { name: 'MRB Bangladesh', detail: 'Dhanmondi, Dhaka' },
      { name: 'Norp Knit', detail: 'Uttara, Dhaka' },
      { name: 'PVH Far East', detail: 'Gulshan, Dhaka' },

    ],
  },
  {
    category: 'Retail & Shopping Centres',
    icon: '🛍️',
    clients: [
      { name: 'Meena Bazar', detail: 'Dhanmondi R/A, Dhaka' },
      { name: 'Molla Shopping Complex', detail: 'Rampura, Dhaka' },
      { name: 'Aarong', detail: 'Jamuna Future Park' },
      { name: 'Aarong', detail: 'Banani, Dhaka' },
    ],
  },
  {
    category: 'Community & Clubs',
    icon: '🏛️',
    clients: [
      { name: 'Officers Club', detail: 'Baily Road, Dhaka' },
    ],
  },
  {
    category: 'Buying Houses',
    icon: '🤝',
    clients: [
      { name: 'Renesiance Group', detail: 'Gulshan-2, Dhaka' },
      { name: 'Sainsbary Asia Ltd.', detail: 'Concord IK Tower, Gulshan-2, Dhaka' },
      { name: 'Moondial', detail: 'Bishwa Road, Badda, Dhaka' },
      { name: 'Global Apparels Solution Ltd.', detail: 'ABC House, 11th Floor, Banani' },
    ],
  },
  {
    category: 'Clients Outside Dhaka',
    icon: '🗺️',
    clients: [
      { name: 'Premier Bank Ltd. — Agrabad Branch', detail: 'Chittagong' },
      { name: 'Premier Bank Ltd. — Mymensingh Branch', detail: 'Mymensingh' },
      { name: 'Premier Bank Ltd. — Rajshahi Branch', detail: 'Rajshahi' },

    ],
  },
];

const commitments = [
  { icon: '📋', text: 'Detailed staff CVs provided before assignment' },
  { icon: '🔒', text: 'Security checks performed daily at checkout' },
  { icon: '📞', text: 'On-site supervisor reachable within 10–15 minutes' },
  { icon: '📊', text: 'Monthly written reports to building management' },
  { icon: '👀', text: 'Twice-weekly unannounced site visits by management' },
  { icon: '🔄', text: 'Immediate action on any staff complaint' },
];

export default function Clients() {
  const totalClients = clientCategories.reduce((sum, c) => sum + c.clients.length, 0);
  const [openSections, setOpenSections] = useState(() =>
    Object.fromEntries(clientCategories.map((c) => [c.category, false]))
  );

  const toggle = (category) =>
    setOpenSections((prev) => ({ ...prev, [category]: !prev[category] }));

  const allOpen = Object.values(openSections).every(Boolean);
  const toggleAll = () => {
    const next = !allOpen;
    setOpenSections(Object.fromEntries(clientCategories.map((c) => [c.category, next])));
  };

  return (
    <div>
      <SEO
        title="Our Clients | Premier Bank, ULAB, Aarong & More | Radiant Cleaning Dhaka"
        description="Radiant Cleaning & Pest Control serves leading organisations across Bangladesh including Premier Bank, Aarong, Monash University, and many more. Trusted since 1993."
        path="/clients"
        keywords="cleaning company clients Dhaka, Premier Bank cleaning service, Aarong cleaning, corporate cleaning Bangladesh, office cleaning Gulshan Banani"
      />
      <PageHeader
        title="Our Clients"
        subtitle={`Trusted by ${totalClients}+ organisations across Bangladesh in banking, retail, education, and more`}
      />

      {/* Stats bar */}
      <div className="clients-stats-bar">
        <div className="cstat"><strong>{clientCategories.length}</strong><span>Sectors Served</span></div>
        <div className="cstat"><strong>{totalClients}+</strong><span>Client Sites</span></div>
        <div className="cstat"><strong>30+</strong><span>Years Trusted</span></div>
        <div className="cstat"><strong>Nationwide</strong><span>Coverage</span></div>
      </div>

      {/* Client categories */}
      <section className="section clients-section">
        <div className="toggle-all-bar">
          <button className="toggle-all-btn" onClick={toggleAll}>
            {allOpen ? '⊖ Collapse All' : '⊕ Expand All'}
          </button>
        </div>

        {clientCategories.map((cat) => {
          const isOpen = openSections[cat.category];
          return (
            <div className="client-category-block" key={cat.category}>
              <button
                className={`cat-heading-btn ${isOpen ? 'open' : ''}`}
                onClick={() => toggle(cat.category)}
                aria-expanded={isOpen}
              >
                <span className="cat-heading-left">
                  <span className="cat-icon">{cat.icon}</span>
                  {cat.category}
                  <span className="cat-count">{cat.clients.length}</span>
                </span>
                <span className="cat-chevron">{isOpen ? '▲' : '▼'}</span>
              </button>

              <div className={`cat-body ${isOpen ? 'expanded' : 'collapsed'}`}>
                <div className="clients-grid">
                  {cat.clients.map((c, i) => (
                    <div className="client-card" key={`${c.name}-${i}`}>
                      <div className="client-card-body">
                        <h3>{c.name}</h3>
                        <p>📍 {c.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Commitments */}
      <section className="section bg-light">
        <div className="section-header">
          <h2>What We Commit to Every Client</h2>
          <p>Our service standards that keep clients coming back year after year</p>
        </div>
        <div className="commitments-grid">
          {commitments.map((c) => (
            <div className="commitment-item" key={c.text}>
              <span className="commitment-icon">{c.icon}</span>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="clients-cta-section">
        <h2>Ready to Join Our Client Family?</h2>
        <p>
          Whether you manage a bank branch, a campus, an office tower, or a retail store,
          RADIANT has the expertise and team to keep it spotless.
        </p>
        <a href="/contact" className="btn btn-white">Request a Quote Today</a>
      </section>
    </div>
  );
}

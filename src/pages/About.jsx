import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import FeatureCard from '../components/FeatureCard';
import './About.css';

const values = [
  { icon: '🌟', title: 'Quality First', description: 'We demand high work standards from every employee, ensuring consistently excellent results for every client.' },
  { icon: '🤝', title: 'Customer Commitment', description: 'Hands-on management and personalized service keeps us tightly connected with every client\'s needs.' },
  { icon: '🔬', title: 'Modern Methods', description: 'We apply ultra-modern, scientific approaches to cleaning and pest control for truly hygienic results.' },
  { icon: '💰', title: 'Competitive Pricing', description: 'Delivering high-quality service at below-market prices — exceptional value without compromise.' },
  { icon: '🛡️', title: 'Accountability', description: 'Regular unannounced site visits, monthly reports, and a satisfaction guarantee back every job we do.' },
  { icon: '📈', title: 'Growth & Reliability', description: 'Tripled in size over the past three years while maintaining the highest standards of customer satisfaction.' },
];

const team = [
  {
    name: 'Md. Anwarul Hoque',
    title: 'Chief Executive',
    phone: '01730-005014',
    initials: 'AH',
  },
  {
    name: '----',
    title: 'Administration',
    phone: '01713-041102',
    initials: 'MH',
  },
  {
    name: 'Md. Ahsanul Hoque',
    title: 'Advisor',
    phone: '01711-520291',
    initials: 'AH',
  },
  {
    name: 'Shagor Barua',
    title: 'Office Manager',
    phone: '01730-005002',
    initials: 'SB',
  },
];

const managementProcess = [
  { icon: '🔍', title: 'Twice-Weekly Site Visits',description: 'Radiant management inspects sites twice a week without advance notice, recording all observations.' },
  { icon: '📋', title: 'Supervisor Records Review', description: 'Management reviews daily progress registers and provides remarks and suggestions to supervisors.' },
  { icon: '📊', title: 'Monthly Reports', description: 'A monthly report is submitted to building management covering outstanding work and plans for the next month.' },
  { icon: '📱', title: '10–15 Min Response', description: 'Every team leader is equipped with a mobile phone and can respond to any complaint within 10–15 minutes.' },
];

export default function About() {
  return (
    <div>
      <SEO
        title="About Us — Professional Cleaning Company in Dhaka Since 1993"
        description="Learn about Radiant Cleaning & Pest Control — established in 1993 in Dhaka with 600+ trained staff. Bangladesh's most trusted cleaning and pest control company."
        path="/about"
        keywords="about Radiant cleaning Dhaka, cleaning company history Bangladesh, professional cleaning company Dhaka"
      />
      <PageHeader
        title="About RADIANT"
        subtitle="A truly professional, highly competitive & value-oriented cleaning and pest control company since 1993"
      />

      {/* Who We Are */}
      <section className="section about-intro">
        <div className="about-grid">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              RADIANT is a truly professional, highly competitive &amp; value-oriented cleaning
              &amp; pest control company established in <strong>1993</strong>, with a vision to
              bring an ultra-modern and scientific approach to maintaining today's hygienic and
              healthy living and working environments.
            </p>
            <p>
              Our strong reputation for delivering <strong>high-quality service at competitive
              prices</strong> spans from residential clients to large commercial facilities. We offer
              years of experience and a full line of professional services.
            </p>
            <p>
              During the last three years, the company has <strong>tripled in size</strong> and
              continues to project a strong growth pattern. Despite this rapid growth, RADIANT
              maintains a firm commitment to customer satisfaction through hands-on management.
            </p>
          </div>
          <div className="about-stats-box">
            <div className="about-stat">
              <strong>1993</strong>
              <span>Year Established</span>
            </div>
            <div className="about-stat">
              <strong>600+</strong>
              <span>Trained Staff</span>
            </div>
            <div className="about-stat">
              <strong>30+</strong>
              <span>Years in Service</span>
            </div>
            <div className="about-stat">
              <strong>3×</strong>
              <span>Growth in 3 Years</span>
            </div>
          </div>
        </div>
      </section>

      {/* Management & Office Staff */}
      <section className="section bg-light">
        <div className="section-header">
          <h2>Management &amp; Office Staff</h2>
          <p>The experienced team leading RADIANT's operations</p>
        </div>
        <div className="team-grid">
          {team.map((member) => (
            <div className="team-card" key={member.phone}>
              <div className="team-avatar">{member.initials}</div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <span className="team-title">{member.title}</span>
                <a className="team-phone" href={`tel:${member.phone.replace(/-/g, '')}`}>
                  📞 {member.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our People */}
      <section className="section">
        <div className="section-header">
          <h2>Our People</h2>
          <p>Our greatest asset is our skilled, disciplined, and dedicated workforce</p>
        </div>
        <div className="people-content">
          <p>
            Our employees are carefully screened and trained to perform their jobs to our exacting
            standards. They are <strong>uniformed</strong> so that you can easily identify them on
            site at all times.
          </p>
          <p>
            We maintain <strong>detailed CVs for all cleaners</strong> at our office and provide a
            copy to you before assignment begins. Our cleaners follow strict security check
            procedures before leaving the premises each day.
          </p>
          <p>
            All cleaners and supervisors enjoy weekly days off and all national and festival
            holidays as authorised by law. We provide <strong>all cleaning equipment and supplies</strong>
            — you do not need to worry about owning or maintaining any tools.
          </p>
          <p>
            If any complaint is raised against a staff member, we will act immediately and take
            appropriate measures. We do not recruit any staff without proper references.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="section">
        <div className="section-header">
          <h2>Our Values</h2>
          <p>The principles that have guided us for over three decades</p>
        </div>
        <div className="features-grid">
          {values.map((v) => (
            <FeatureCard key={v.title} {...v} />
          ))}
        </div>
      </section>

      {/* Management Process */}
      <section className="section bg-light">
        <div className="section-header">
          <h2>Management &amp; Quality Control</h2>
          <p>Our rigorous oversight process ensures consistent excellence on every site</p>
        </div>
        <div className="features-grid">
          {managementProcess.map((m) => (
            <FeatureCard key={m.title} {...m} />
          ))}
        </div>
      </section>

      {/* Address Strip */}
      <section className="address-strip">
        <p>📍 H-92, 1st Floor, New Airport Road, Banani, Dhaka-1213</p>
        <p>📞 9885167 &nbsp;|&nbsp; 9872027 &nbsp;|&nbsp; 01730-05001 &nbsp;&nbsp; 📠 88-02-8401791</p>
      </section>
    </div>
  );
}

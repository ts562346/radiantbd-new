import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import './Services.css';

const mainServices = [
  {
    icon: '🏢',
    title: 'Office Cleaning',
    description: 'Comprehensive daily, weekly, or customised office cleaning including vacuuming, mopping, dusting, window cleaning, toilet sanitation, and waste disposal. Our teams work around your schedule to minimise disruption.',
  },
  {
    icon: '🏠',
    title: 'Residential Cleaning',
    description: 'Top-to-bottom home cleaning covering all rooms, bathrooms, kitchens, and common areas. Includes carpet vacuuming, shampooing, upholstery cleaning, and blind/curtain cleaning for a truly fresh home.',
  },
  {
    icon: '🪟',
    title: 'Curtain Wall Maintenance',
    description: 'High-rise and commercial facade cleaning using modern rope-access and scaffolding techniques. Internal and external glass, windows, and structural facades cleaned to the highest standards.',
  },
  {
    icon: '🔨',
    title: 'After-Construction Cleaning',
    description: 'Specialist post-construction clean-up removing cement dust, paint splashes, tile grout residue, and construction debris. We leave your newly built or renovated space ready for occupancy.',
  },
  {
    icon: '🧹',
    title: 'Janitorial & Support Staff Supply',
    description: 'Provision of trained, uniformed, background-checked janitorial and support staff on a full-time or part-time basis. All staff come with detailed CVs and are managed by our supervisors.',
  },
  {
    icon: '🐛',
    title: 'Pest Control',
    description: 'Professional pest management including insecticidal fogging of closed and open areas, rodent control, cockroach treatment, mosquito control, and other targeted pest elimination programs.',
  },
];

const additionalServices = [
  { icon: '🚗', title: 'Car Park Cleaning', description: 'Regular cleaning and maintenance of outdoor car-parking areas and driveways.' },
  { icon: '🛗', title: 'Lift Cabin Cleaning', description: 'Interior lift cabin cleaning including glass, fixtures, and cabin surfaces.' },
  { icon: '🚽', title: 'Toilet Sanitation', description: 'Deep cleaning, sanitisation, and ongoing maintenance of washrooms and restroom facilities.' },
  { icon: '🪞', title: 'Glass & Window Cleaning', description: 'Internal and external glass cleaning including internal drain and facade glass.' },
  { icon: '🛋️', title: 'Carpet & Upholstery', description: 'Carpet vacuuming, shampooing, and upholstery cleaning to restore furnishings.' },
  { icon: '🏗️', title: 'Drain Cleaning', description: 'External drain clearing and maintenance to prevent blockages and maintain hygiene.' },
];

const equipment = [
  'Industrial Floor Scrubbers', 'Carpet Shampooing Machines', 'High-Pressure Washers',
  'Industrial Vacuum Cleaners', 'Telescopic Window Squeegees', 'Insecticide Fogging Machines',
  'Rope-Access Safety Equipment', 'Steam Cleaning Machines',
];

export default function Services() {
  return (
    <div>
      <SEO
        title="Cleaning & Pest Control Services in Dhaka | Office, Residential, Pest Control"
        description="Full range of professional cleaning services in Dhaka: office cleaning, residential cleaning, curtain wall maintenance, after-construction cleaning, janitorial staff supply, and pest control."
        path="/services"
        keywords="office cleaning Dhaka, residential cleaning Dhaka, pest control Dhaka, curtain wall cleaning Bangladesh, after construction cleaning Dhaka, janitorial services Dhaka"
      />
      <PageHeader
        title="Our Services"
        subtitle="A full suite of professional cleaning and pest control services for every environment"
      />

      {/* Main Services */}
      <section className="section">
        <div className="section-header">
          <h2>Core Services</h2>
          <p>Our primary service offerings, each delivered by specialist trained teams</p>
        </div>
        <div className="services-grid-wide">
          {mainServices.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="section bg-light">
        <div className="section-header">
          <h2>Additional Services</h2>
          <p>Supplementary cleaning solutions available as standalone or add-on services</p>
        </div>
        <div className="services-grid-wide">
          {additionalServices.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* Equipment */}
      <section className="section equipment-section">
        <div className="section-header">
          <h2>Our Equipment</h2>
          <p>We supply all professional cleaning machinery and equipment — you don't need to worry about a thing</p>
        </div>
        <div className="equipment-grid">
          {equipment.map((item) => (
            <div className="equipment-item" key={item}>
              <span className="equip-check">✔</span> {item}
            </div>
          ))}
        </div>
      </section>

      {/* Guarantee Strip */}
      <section className="guarantee-strip">
        <h2>Our Satisfaction Guarantee</h2>
        <p>
          If you are not happy with our service, RADIANT's satisfaction guarantee means
          we will <strong>re-clean at no additional charge</strong>. Your satisfaction is
          not just a promise — it's our policy.
        </p>
      </section>
    </div>
  );
}

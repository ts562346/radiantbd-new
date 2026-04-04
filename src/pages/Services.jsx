import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import './Services.css';

const mainServices = [
  {
    icon: <i className="fi fi-tr-building"></i>,
    title: 'High Raise Commercial Building Cleaning & Maintenance',
    description: 'Comprehensive daily, weekly, or customised office cleaning including vacuuming, mopping, dusting, window cleaning, toilet sanitation, and waste disposal. Our teams work around your schedule to minimise disruption.',
  },
  {
    icon: <i class="fi fi-tr-desk"></i>,
    title: 'Office Cleaning',
    description: 'Top-to-bottom office cleaning covering all rooms, bathrooms, kitchens, and common areas. Includes carpet vacuuming, shampooing, upholstery cleaning, and blind/curtain cleaning for a truly fresh environment.',
  },
  {
    icon: <i className="fi fi-tr-user-gear"></i>,
    title: 'Janitorial & Support Staff Service',
    description: 'Provision of trained, uniformed, background-checked janitorial and support staff on a full-time or part-time basis. All staff come with detailed CVs and are managed by our supervisors.',
  },
  { 
    icon: <i className="fi fi-tr-users-alt"></i>, 
    title: 'Facility Management Services', 
    description: 'Facility Management Services for residential and commercial buildings. It includes Receptionist, Electrician, Lift operator, CCTV Operator, security, etc.' },
  {
    icon: <i className="fi fi-tr-tools"></i>,
    title: 'After-Construction Cleaning',
    description: 'Specialist post-construction clean-up removing cement dust, paint splashes, tile grout residue, and construction debris. We leave your newly built or renovated space ready for occupancy.',
  },
  {
    icon:<i className="fi fi-tr-bug"></i>,
    title: 'Pest Control',
    description: 'Professional pest management including insecticidal fogging of closed and open areas, rodent control, cockroach treatment, mosquito control, and other targeted pest elimination programs.',
  },
];

const additionalServices = [
  { 
    icon: <i className="fi fi-tr-car-side"></i>, 
    title: 'Car Park Cleaning', 
    description: 'Regular cleaning and maintenance of outdoor car-parking areas and driveways.' 
  },
  { 
    icon: <i className="fi fi-tr-escalator"></i>, 
    title: 'Stair Cleaning', 
    description: 'Thorough cleaning of staircases, including sweeping, mopping, handrail sanitization, and removal of dust and debris to ensure a safe and spotless passage.' 
  },
  { 
    icon: <i className="fi fi-tr-toilet"></i>, 
    title: 'Washroom Sanitation', 
    description: 'Deep cleaning, sanitisation, and ongoing maintenance of washrooms and restroom facilities.' 
  },
  { 
    icon: <i className="fi fi-tr-layer-minus"></i>, 
    title: 'Floor Cleaning', 
    description: 'Hard floor scrubbing and polishing to maintain a pristine appearance.' 
  },
  { 
    icon: <i className="fi fi-tr-couch"></i>, 
    title: 'Carpet & Upholstery Cleaning', 
    description: 'Carpet vacuuming, shampooing, and upholstery cleaning to restore furnishings.' 
  },
  {
    icon: <i className="fi fi-tr-window-frame"></i>,
    title: 'Curtain Wall Maintenance',
    description: 'High-rise and commercial facade cleaning using modern rope-access and scaffolding techniques. Internal and external glass, windows, and structural facades cleaned to the highest standards.',
  },
];

const equipment = [
  'Auto Scrubbers', 'Carpet Shampooing Machines', 'High-Pressure Washers',
  'Industrial Vacuum Cleaners', 'Telescopic Window Squeegees', 'Insecticide Fogging Machines',
  'Rope-Access Safety Equipment', 'Steam Cleaning Machines', 'Professional Dryer Machine'
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

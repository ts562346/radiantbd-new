import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import './Contact.css';

const services = [
  'Office Cleaning',
  'Residential Cleaning',
  'Curtain Wall Maintenance',
  'After-Construction Cleaning',
  'Janitorial & Staff Supply',
  'Pest Control',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <SEO
        title="Contact Us | Get a Free Cleaning Quote in Dhaka | Radiant Cleaning"
        description="Contact Radiant Cleaning & Pest Control in Banani, Dhaka. Call 01730-05001 or email rcm92@hotmail.com for a free cleaning quote. H-92, New Airport Road, Banani, Dhaka-1213."
        path="/contact"
        keywords="contact cleaning company Dhaka, cleaning quote Dhaka, cleaning service phone Dhaka, Radiant cleaning contact"
      />
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch for a free quote or any enquiry — we respond quickly"
      />

      <section className="section contact-section">
        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>
              Have a cleaning requirement? Fill in the form or reach out to us directly.
              Our team is ready to provide a tailored solution for your needs.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <span className="ci-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>H-92, 1st Floor, New Airport Road<br />Banani, Dhaka-1213</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <span className="ci-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>9885167 | 9872027<br />01730-05001</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <span className="ci-icon">📠</span>
                <div>
                  <strong>Fax</strong>
                  <p>88-02-8401791</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <span className="ci-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>rcm92@hotmail.com</p>
                </div>
              </div>
            </div>

            <div className="office-hours">
              <h4>Office Hours</h4>
              <p>Saturday – Thursday: 9:00 AM – 6:00 PM</p>
              <p>Friday: Closed</p>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="form-success">
                <span>✅</span>
                <h3>Thank you, {form.name}!</h3>
                <p>We've received your enquiry and will be in touch shortly.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }} className="btn btn-primary">
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Request a Free Quote</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+880 ..." />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Required</label>
                    <select id="service" name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service…</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about your cleaning requirements…" required />
                </div>

                <button type="submit" className="btn btn-primary btn-full">Send Enquiry</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <div className="map-placeholder">
        <p>📍 H-92, 1st Floor, New Airport Road, Banani, Dhaka-1213</p>
        <p className="map-note">Banani, Dhaka — Near New Airport Road</p>
      </div>
    </div>
  );
}

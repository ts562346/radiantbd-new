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
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Uses FormSubmit so this static site can send form entries to email without a backend.
  const contactEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || 'https://formsubmit.co/ajax/rcm92@hotmail.com';

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || 'N/A',
          service: form.service || 'Not selected',
          message: form.message,
          _subject: `Website enquiry from ${form.name}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to send your enquiry right now. Please try again shortly.');
      }

      setSubmitted(true);
    } catch (submitError) {
      setError(submitError.message || 'Something went wrong while sending your enquiry.');
    } finally {
      setSubmitting(false);
    }
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
                  <p>9885167 | 9872027<br />017300-05001<br />017115-20291</p>
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
              <p>Saturday – Thursday: 8:00 AM – 5:00 PM</p>
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

                {error ? <p className="form-error">{error}</p> : null}

                <button type="submit" className="btn btn-primary btn-full" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send Enquiry'}
                </button>
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

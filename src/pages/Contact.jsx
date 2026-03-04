import React, { useState } from 'react';
import { MessageCircle, Mail, Instagram, Facebook, MapPin, Clock } from 'lucide-react';
import { CONTACT_EMAIL, INSTAGRAM_URL, FACEBOOK_URL, WHATSAPP_DISPLAY } from '../config/contact';
import { WHATSAPP_NUMBER } from '../config/whatsapp';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const whatsappBase = `https://wa.me/${WHATSAPP_NUMBER}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello! I'm ${formData.name}.
Phone: ${formData.phone}
Message: ${formData.message}`;
    const url = `${whatsappBase}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <section style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)', padding: '100px 0 80px', textAlign: 'center' }}>
        <div className="container">
          <h1 className="hero-medium" style={{ marginBottom: '24px' }}>Get in Touch</h1>
          <p className="body-large" style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Whether you have questions about our products or need help with an order, we’re here to assist.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Info */}
            <div>
              <h2 className="heading-2" style={{ marginBottom: '32px' }}>Contact Information</h2>

              <div style={{ marginBottom: '32px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MessageCircle size={24} color="#fff" />
                </div>
                <div>
                  <h3 className="heading-3" style={{ marginBottom: '8px' }}>WhatsApp</h3>
                  <p className="body-regular" style={{ marginBottom: '8px', color: 'var(--text-secondary)' }}>
                    Quick orders & instant support
                  </p>
                  <a href={whatsappBase} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-dark)', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>
                    +{WHATSAPP_NUMBER}
                  </a>
                </div>
              </div>

              <div style={{ marginBottom: '32px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--gold-medium)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={24} color="#fff" />
                </div>
                <div>
                  <h3 className="heading-3" style={{ marginBottom: '8px' }}>Email</h3>
                  <p className="body-regular" style={{ marginBottom: '8px', color: 'var(--text-secondary)' }}>For detailed inquiries</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--gold-dark)', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div style={{ marginBottom: '32px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F56040 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Instagram size={24} color="#fff" />
                </div>
                <div>
                  <h3 className="heading-3" style={{ marginBottom: '8px' }}>Instagram</h3>
                  <p className="body-regular" style={{ marginBottom: '8px', color: 'var(--text-secondary)' }}>Follow us for updates & tips</p>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-dark)', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>
                    @h_mia_luxeorganics
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', background: 'var(--gold-light)', borderRadius: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Facebook size={24} color="var(--gold-dark)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', fontFamily: "'Playfair Display', serif", marginBottom: '8px' }}>Facebook</h3>
                  <p className="body-regular" style={{ marginBottom: '8px', color: 'var(--text-secondary)' }}>Message us on Facebook</p>
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-dark)', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>
                    Open Facebook Page
                  </a>
                </div>
              </div>

              <div style={{ background: 'var(--bg-secondary)', padding: '24px', border: '1px solid var(--border-light)', borderRadius: '0px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <Clock size={24} color="var(--gold-medium)" />
                  <h3 className="heading-3">Business Hours</h3>
                </div>
                <p className="body-regular" style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>Sunday: 12:00 PM - 6:00 PM</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={24} color="var(--gold-medium)" style={{ marginTop: '4px' }} />
                <div>
                  <h3 className="heading-3" style={{ marginBottom: '8px' }}>Location</h3>
                  <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>Serving customers across Pakistan</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div style={{ background: 'var(--bg-secondary)', padding: '40px', border: '1px solid var(--border-light)' }}>
              <h2 className="heading-2" style={{ marginBottom: '24px' }}>Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                {[
                  { id: 'name', label: 'Your Name *', type: 'text', placeholder: '' },
                  { id: 'phone', label: 'Phone Number *', type: 'tel', placeholder: '+92 XXX XXXXXXX' },
                ].map((f) => (
                  <div key={f.id} style={{ marginBottom: '24px' }}>
                    <label htmlFor={f.id} style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', fontFamily: "'Montserrat', sans-serif", color: 'var(--text-primary)' }}>
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      id={f.id}
                      name={f.id}
                      required
                      value={formData[f.id]}
                      onChange={handleChange}
                      placeholder={f.placeholder}
                      style={{ width: '100%', padding: '14px 16px', border: '1px solid var(--border-medium)', borderRadius: '0px', fontSize: '15px', fontFamily: "'Inter', sans-serif", background: 'var(--bg-primary)', color: 'var(--text-primary)', transition: 'border-color 0.3s ease' }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--gold-medium)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-medium)')}
                    />
                  </div>
                ))}

                <div style={{ marginBottom: '32px' }}>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', fontFamily: "'Montserrat', sans-serif", color: 'var(--text-primary)' }}>
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    style={{ width: '100%', padding: '14px 16px', border: '1px solid var(--border-medium)', borderRadius: '0px', fontSize: '15px', fontFamily: "'Inter', sans-serif", background: 'var(--bg-primary)', color: 'var(--text-primary)', resize: 'vertical', transition: 'border-color 0.3s ease' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--gold-medium)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-medium)')}
                  />
                </div>

                <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                  <MessageCircle size={18} />
                  Send via WhatsApp
                </button>

                <p className="body-small" style={{ marginTop: '16px', textAlign: 'center', color: 'var(--text-light)' }}>
                  Your message will be sent to our WhatsApp for faster response
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-small" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="heading-2" style={{ marginBottom: '20px' }}>Have a Question?</h2>
            <p className="body-regular" style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
              For quick answers, check our FAQ on the home page, or reach out via WhatsApp for instant support.
            </p>
            <a href={whatsappBase} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle size={18} />
              Chat Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

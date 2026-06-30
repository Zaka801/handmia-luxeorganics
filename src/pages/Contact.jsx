import React, { useState } from 'react';
import { Clock, Facebook, Instagram, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { CONTACT_EMAIL, FACEBOOK_URL, INSTAGRAM_URL, WHATSAPP_DISPLAY } from '../config/contact';
import { buildWhatsAppUrl } from '../config/whatsapp';

export const Contact = () => {
  const [formData, setFormData] = useState({ message: '', name: '', phone: '' });

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `Hello H & Mia, I need support.
Name: ${formData.name}
Phone: ${formData.phone}
Message: ${formData.message}`;

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <section className="page-hero compact">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Questions, custom orders, and payment help.</h1>
          <p>Reach H & Mia for product guidance, delivery details, or order confirmation.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-list">
            <article className="contact-item">
              <MessageCircle size={24} />
              <div>
                <h2>WhatsApp</h2>
                <p>Quick orders and support</p>
                <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  {WHATSAPP_DISPLAY}
                </a>
              </div>
            </article>

            <article className="contact-item">
              <Mail size={24} />
              <div>
                <h2>Email</h2>
                <p>Detailed questions and follow-ups</p>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </div>
            </article>

            <article className="contact-item">
              <Instagram size={24} />
              <div>
                <h2>Instagram</h2>
                <p>New batches, product care, and updates</p>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  @h_mia_luxeorganics
                </a>
              </div>
            </article>

            <article className="contact-item">
              <Facebook size={24} />
              <div>
                <h2>Facebook</h2>
                <p>Message us on Facebook</p>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                  Open Facebook page
                </a>
              </div>
            </article>

            <article className="contact-item muted">
              <Clock size={24} />
              <div>
                <h2>Business hours</h2>
                <p>Monday to Saturday, 10:00 AM to 8:00 PM</p>
                <p>Sunday, 12:00 PM to 6:00 PM</p>
              </div>
            </article>

            <article className="contact-item muted">
              <MapPin size={24} />
              <div>
                <h2>Location</h2>
                <p>Serving customers across Pakistan.</p>
              </div>
            </article>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <p className="eyebrow">Send a message</p>
            <h2>Start on WhatsApp</h2>

            <label className="input-shell">
              <span>Name</span>
              <div>
                <input name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
              </div>
            </label>

            <label className="input-shell">
              <span>Phone</span>
              <div>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+92 XXX XXXXXXX"
                />
              </div>
            </label>

            <label className="input-shell">
              <span>Message</span>
              <div className="textarea-wrap">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us what you need"
                />
              </div>
            </label>

            <button className="btn-primary full-width" type="submit">
              <Send size={18} />
              Send via WhatsApp
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

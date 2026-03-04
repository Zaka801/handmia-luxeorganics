import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Facebook } from 'lucide-react';
import { CONTACT_EMAIL, INSTAGRAM_URL, FACEBOOK_URL } from '../config/contact';
import { WHATSAPP_NUMBER } from '../config/whatsapp';

export const Footer = () => {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-light)',
        padding: '60px 0 30px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          {/* Brand Section */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img src="/images/logo.png" alt="H & Mia" style={{ width: '44px', height: '44px' }} />
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: '1px',
                  margin: 0,
                }}
              >
                H & Mia
              </h3>
            </div>

            <p className="body-small" style={{ marginBottom: '20px', lineHeight: '1.8' }}>
              Premium handmade soaps crafted with pure ingredients for visible results and everyday luxury.
            </p>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-primary)', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-medium)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-primary)', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-medium)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{ color: 'var(--text-primary)', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-medium)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: '18px',
                fontWeight: '600',
                fontFamily: "'Playfair Display', serif",
                marginBottom: '16px',
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { to: '/', label: 'Home' },
                { to: '/products', label: 'Products' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
              ].map((x) => (
                <li key={x.to} style={{ marginBottom: '12px' }}>
                  <Link
                    to={x.to}
                    className="body-small"
                    style={{ textDecoration: 'none', color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    {x.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              style={{
                fontSize: '18px',
                fontWeight: '600',
                fontFamily: "'Playfair Display', serif",
                marginBottom: '16px',
              }}
            >
              Get In Touch
            </h4>
            <p className="body-small" style={{ marginBottom: '12px' }}>
              <strong>WhatsApp:</strong>
              <br />
              <a
                href={waLink}
                style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-medium)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                +{WHATSAPP_NUMBER}
              </a>
            </p>
            <p className="body-small">
              <strong>Email:</strong>
              <br />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-medium)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>

        <div style={{ paddingTop: '30px', borderTop: '1px solid var(--border-light)', textAlign: 'center' }}>
          <p className="body-small">
            © {new Date().getFullYear()} H & Mia. All rights reserved. Crafted with care in Pakistan.
          </p>
        </div>
      </div>
    </footer>
  );
};

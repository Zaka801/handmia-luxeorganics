import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Facebook, Instagram, Mail, MessageCircle, Store } from 'lucide-react';
import { CONTACT_EMAIL, FACEBOOK_URL, INSTAGRAM_URL, WHATSAPP_DISPLAY } from '../config/contact';
import { DARAZ_STORE_URL } from '../config/site';
import { WHATSAPP_NUMBER } from '../config/whatsapp';

export const Footer = () => {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand-link" to="/">
            <img src="/images/logo.png" alt="H & Mia" />
            <span>H & Mia</span>
          </Link>
          <p>Premium handmade soaps crafted with pure ingredients for visible glow, comfort, and everyday luxury.</p>
          <div className="social-row">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={22} />
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={22} />
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Email">
              <Mail size={22} />
            </a>
          </div>
        </div>

        <div>
          <h3>Shop</h3>
          <Link to="/products">All products</Link>
          <Link to="/about">About H & Mia</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h3>Support</h3>
          <a href={waLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={18} />
            {WHATSAPP_DISPLAY}
          </a>
          <a href={DARAZ_STORE_URL} target="_blank" rel="noopener noreferrer">
            <Store size={18} />
            Shop on Daraz
            <ExternalLink size={14} />
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <p>Serving customers across Pakistan.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Copyright {new Date().getFullYear()} H & Mia. All rights reserved.</span>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      style={{
        background: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-light)',
        padding: '20px 0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 254, 242, 0.95)',
      }}
    >
      <div
        className="container"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '24px',
            fontWeight: '600',
            fontFamily: "'Playfair Display', serif",
            color: 'var(--text-primary)',
            textDecoration: 'none',
            letterSpacing: '1px',
          }}
        >
          <img src="/images/logo.png" alt="H & Mia" style={{ width: '36px', height: '36px' }} />
          H & Mia
        </Link>

        {/* Desktop Navigation */}
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: '500',
                  fontFamily: "'Montserrat', sans-serif",
                  padding: '8px 0',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  borderBottom: isActive(link.path)
                    ? '2px solid var(--text-primary)'
                    : '2px solid transparent',
                }}
                onMouseEnter={(e) => {
                  if (!isActive(link.path)) e.currentTarget.style.borderBottom = '2px solid var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive(link.path)) e.currentTarget.style.borderBottom = '2px solid transparent';
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} color="var(--text-primary)" /> : <Menu size={24} color="var(--text-primary)" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          style={{
            display: 'none',
            padding: '20px 0',
            borderTop: '1px solid var(--border-light)',
            marginTop: '20px',
          }}
          className="mobile-nav"
        >
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {navLinks.map((link) => (
              <li key={link.path} style={{ marginBottom: '16px' }}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: isActive(link.path) ? '600' : '500',
                    fontFamily: "'Montserrat', sans-serif",
                    display: 'block',
                    padding: '12px 40px',
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .mobile-nav { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

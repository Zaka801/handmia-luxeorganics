import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      style={{
        background: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-light)',
        padding: 0,
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 254, 242, 0.95)',
      }}
    >
      {/* Promo ticker */}
      <div className="promo-bar" aria-label="Promotion">
        <div className="promo-track">
          <span className="promo-item">Flat 50% OFF • PKR 900 → PKR 450</span>
          <span className="promo-sep">•</span>
          <span className="promo-item">Flat 50% OFF • PKR 900 → PKR 450</span>
          <span className="promo-sep">•</span>
          <span className="promo-item">Bundle Offer: Any 3 soaps for PKR 1200 (was 2700)</span>
          <span className="promo-sep">•</span>
          

          {/* duplicate for seamless loop */}
          <span className="promo-item">Flat 50% OFF • PKR 900 → PKR 450</span>
          <span className="promo-sep">•</span>
          <span className="promo-item">Flat 50% OFF • PKR 900 → PKR 450</span>
          <span className="promo-sep">•</span>
          <span className="promo-item">Bundle Offer: Any 3 soaps for PKR 1200 (was 2700)</span>
          <span className="promo-sep">•</span>
          
        </div>
      </div>

      <div
        className="container"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0' }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src="/images/logo.png"
              alt="H & Mia"
              style={{ width: '44px', height: '44px', borderRadius: '50%' }}
            />
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 600 }}>
              H & Mia
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '34px', alignItems: 'center' }}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="nav-link"
              style={{
                textDecoration: 'none',
                color: isActive(l.to) ? 'var(--text-primary)' : 'var(--text-secondary)',
                position: 'relative',
                paddingBottom: '6px',
              }}
            >
              {l.label}
              {isActive(l.to) && (
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    height: '2px',
                    background: 'var(--text-primary)',
                  }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileOpen((s) => !s)}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'none',
            padding: 8,
          }}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isMobileOpen && (
        <div
          className="mobile-nav"
          style={{
            display: 'none',
            padding: '10px 16px 18px',
            borderTop: '1px solid rgba(51,51,51,0.08)',
            background: 'rgba(255, 254, 242, 0.98)',
          }}
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setIsMobileOpen(false)}
              style={{
                display: 'block',
                padding: '12px 8px',
                textDecoration: 'none',
                color: isActive(l.to) ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontFamily: 'Montserrat, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.6px',
                fontSize: 14,
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .promo-bar {
          background: var(--gold-medium);
          color: #fff;
          height: 34px;
          display: flex;
          align-items: center;
          overflow: hidden;
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }

        .promo-track {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          white-space: nowrap;
          will-change: transform;
          animation: promo-marquee 18s linear infinite;
          padding-left: 100%;
        }

        .promo-item {
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }

        .promo-sep { opacity: 0.9; }

        @keyframes promo-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        .nav-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .mobile-nav { display: block !important; }
          .promo-track { animation-duration: 22s; }
        }
      `}</style>
    </nav>
  );
};

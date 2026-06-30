import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { LogOut, Menu, ShoppingBag, User, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { isAuthenticated, openAuth, signOut, user } = useAuth();
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Shop' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const displayName = user?.user_metadata?.name || user?.email?.split('@')[0] || 'Account';

  return (
    <header className="site-header">
      <div className="promo-bar">
        <span>Launch edit: 25% off all soap bars</span>
        <span>Complimentary delivery on 3 or more soaps</span>
        <span>Personal invoice checkout on WhatsApp</span>
      </div>

      <nav className="nav-shell" aria-label="Primary navigation">
        <Link className="brand-link" to="/" aria-label="H & Mia home">
          <img src="/images/logo.png" alt="H & Mia" />
          <span>H & Mia</span>
        </Link>

        <div className="desktop-nav">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">
          {isAuthenticated ? (
            <button className="account-button" type="button" onClick={signOut} title="Sign out">
              <User size={18} />
              <span>{displayName}</span>
              <LogOut size={16} />
            </button>
          ) : (
            <button className="account-button" type="button" onClick={openAuth}>
              <User size={18} />
              <span>Sign in</span>
            </button>
          )}

          <button className="cart-button" type="button" onClick={openCart} aria-label={`Open cart with ${itemCount} items`}>
            <ShoppingBag size={20} />
            <span>{itemCount}</span>
          </button>

          <button
            className="icon-button mobile-toggle"
            type="button"
            onClick={() => setIsMobileOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isMobileOpen && (
        <div className="mobile-nav">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}>
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

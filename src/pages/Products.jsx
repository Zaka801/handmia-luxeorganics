import React, { useMemo, useState } from 'react';
import { ExternalLink, QrCode, SlidersHorizontal, Store } from 'lucide-react';
import { CustomerReviews } from '../components/CustomerReviews';
import { ProductCard } from '../components/ProductCard';
import { DARAZ_STORE_URL } from '../config/site';
import { productsData } from '../data/products';

export const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...Array.from(new Set(productsData.map((product) => product.category)))];

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return productsData;

    return productsData.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <section className="page-hero compact">
        <div className="container">
          <p className="eyebrow">The soap atelier</p>
          <h1>Premium handmade bars for glow, calm, and gentle care.</h1>
          <p>Explore H & Mia's curated collection of botanical soap bars, gift-ready shapes, and soft daily rituals.</p>
        </div>
      </section>

      <section className="section shop-section">
        <div className="container">
          <div className="shop-toolbar">
            <div className="toolbar-title">
              <SlidersHorizontal size={18} />
              <span>{filteredProducts.length} products</span>
            </div>
            <div className="filter-tabs" aria-label="Product category">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={category === activeCategory ? 'active' : ''}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="value-strip dark">
        <div className="container value-grid">
          <div className="value-item">
            <strong>Launch edit</strong>
            <p>Every soap bar is available at PKR 750 for a limited launch offer.</p>
          </div>
          <div className="value-item">
            <strong>Complimentary delivery</strong>
            <p>Applied automatically when your cart includes 3 or more soap bars.</p>
          </div>
          <div className="value-item">
            <strong>Invoice checkout</strong>
            <p>Your cart becomes a clean WhatsApp invoice with quantities and prices.</p>
          </div>
        </div>
      </section>

      <CustomerReviews />

      <section className="section daraz-section">
        <div className="container daraz-card">
          <div className="daraz-copy">
            <p className="eyebrow">Official Daraz store</p>
            <h2>Also available on Daraz.</h2>
            <p>
              Choose the H & Mia website for personal WhatsApp invoices, or visit Daraz for marketplace checkout and
              saved delivery details.
            </p>
            <a className="btn-primary" href={DARAZ_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Store size={18} />
              Shop on Daraz
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="daraz-qr" aria-label="Daraz store QR code">
            <QrCode size={20} />
            <img src="/images/daraz-store-qr.png" alt="QR code for H & Mia Daraz store" loading="lazy" />
            <span>Scan for Daraz store</span>
          </div>
        </div>
      </section>
    </div>
  );
};

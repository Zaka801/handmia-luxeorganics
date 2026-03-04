import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { productsData } from '../data/products';

export const Products = () => {
  return (
    <div>
      <section
        style={{
          background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
          padding: '80px 0 60px',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h1 className="hero-medium" style={{ marginBottom: '20px' }}>
            Our Premium Collection
          </h1>
          <p className="body-large" style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Discover handcrafted soaps made with the finest natural ingredients. Each bar is created with care to bring you everyday luxury.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-secondary)', padding: '40px 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', textAlign: 'center' }}>
            {[
              { k: '100% Natural', v: 'No harsh chemicals or unnecessary additives' },
              { k: 'Handcrafted', v: 'Made in small batches with care' },
              { k: 'All Skin Types', v: 'Suitable for sensitive and delicate skin' },
              { k: 'Pakistan Delivery', v: 'Shipping available across Pakistan' },
            ].map((x) => (
              <div key={x.k}>
                <p style={{ fontSize: '14px', fontWeight: '600', fontFamily: "'Montserrat', sans-serif", color: 'var(--gold-dark)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {x.k}
                </p>
                <p className="body-small">{x.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

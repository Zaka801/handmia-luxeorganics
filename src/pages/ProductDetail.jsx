import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Check } from 'lucide-react';
import { productsData } from '../data/products';
import { buildWhatsAppUrl } from '../config/whatsapp';

const formatPKR = (value) => {
  if (typeof value !== 'number') return '';
  return `PKR ${value.toLocaleString('en-PK')}`;
};

export const ProductDetail = () => {
  const { productId } = useParams();
  const product = productsData.find((p) => p.id === productId);

  if (!product) return <Navigate to="/products" replace />;

  const message = `Hello! I would like to order ${product.name}.
Quantity: [Please specify]
Delivery City: [Please specify]`;

  const whatsappUrl = buildWhatsAppUrl(message);

  return (
    <div>
      {/* Back Navigation */}
      <div className="container" style={{ paddingTop: '30px' }}>
        <Link
          to="/products"
          className="btn-secondary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
        >
          <ArrowLeft size={16} />
          Back to Products
        </Link>
      </div>

      {/* Product */}
      <section className="section-padding-small">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '60px',
              alignItems: 'start',
            }}
          >
            {/* Product Image */}
            <div className="product-detail-media">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <div className="placeholder-image" style={{ height: '100%', width: '100%' }}>
                  Upload product image here
                </div>
              )}
            </div>

            {/* Product Details */}
            <div>
              <h1 className="hero-medium" style={{ marginBottom: '12px' }}>
                {product.name}
              </h1>

              {/* Price */}
              {(product.price || product.oldPrice) && (
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '18px' }}>
                  {product.oldPrice && (
                    <span
                      style={{
                        fontSize: '16px',
                        color: 'var(--text-secondary)',
                        textDecoration: 'line-through',
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      {formatPKR(product.oldPrice)}
                    </span>
                  )}
                  {product.price && (
                    <span
                      style={{
                        fontSize: '22px',
                        fontWeight: '700',
                        color: 'var(--gold-dark)',
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      {formatPKR(product.price)}
                    </span>
                  )}
                </div>
              )}

              <p
                className="body-large"
                style={{ marginBottom: '28px', color: 'var(--text-secondary)', lineHeight: '1.8' }}
              >
                {product.shortDescription}
              </p>

              {/* Order Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ marginBottom: '40px', display: 'inline-flex' }}
              >
                <MessageCircle size={18} />
                Order on WhatsApp
              </a>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '32px' }}>
                {/* Key Ingredients */}
                <div style={{ marginBottom: '40px' }}>
                  <h2 className="heading-3" style={{ marginBottom: '20px' }}>
                    Key Ingredients
                  </h2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {product.ingredients.map((ingredient, index) => (
                      <li
                        key={index}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}
                      >
                        <Check size={20} color="var(--gold-medium)" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span className="body-regular" style={{ color: 'var(--text-primary)' }}>
                          {ingredient}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div style={{ marginBottom: '40px' }}>
                  <h2 className="heading-3" style={{ marginBottom: '20px' }}>
                    Benefits
                  </h2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {product.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}
                      >
                        <Check size={20} color="var(--gold-medium)" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span className="body-regular" style={{ color: 'var(--text-primary)' }}>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How to Use */}
                <div style={{ marginBottom: '40px' }}>
                  <h2 className="heading-3" style={{ marginBottom: '16px' }}>
                    How to Use
                  </h2>
                  <p className="body-regular" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    {product.howToUse}
                  </p>
                </div>

                {/* Good For */}
                <div
                  style={{
                    background: 'var(--bg-secondary)',
                    padding: '24px',
                    border: '1px solid var(--border-light)',
                    borderRadius: '0px',
                  }}
                >
                  <h2 className="heading-3" style={{ marginBottom: '12px' }}>
                    Good For
                  </h2>
                  <p className="body-regular" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    {product.goodFor}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section
        className="section-padding"
        style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}
      >
        <div className="container">
          <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '40px' }}>
            You May Also Like
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {productsData
              .filter((p) => p.id !== productId)
              .slice(0, 3)
              .map((related) => (
                <div
                  key={related.id}
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-light)',
                    padding: '24px',
                    textAlign: 'center',
                  }}
                >
                  <h3 className="heading-3" style={{ marginBottom: '10px' }}>
                    {related.name}
                  </h3>

                  {(related.price || related.oldPrice) && (
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '12px' }}>
                      {related.oldPrice && (
                        <span style={{ fontSize: '13px', color: 'var(--text-secondary)', textDecoration: 'line-through' }}>
                          {formatPKR(related.oldPrice)}
                        </span>
                      )}
                      {related.price && (
                        <span style={{ fontSize: '15px', fontWeight: '700', color: 'var(--gold-dark)' }}>
                          {formatPKR(related.price)}
                        </span>
                      )}
                    </div>
                  )}

                  <p className="body-small" style={{ marginBottom: '18px' }}>
                    {related.shortDescription.substring(0, 90)}...
                  </p>
                  <Link to={related.link} className="btn-secondary">
                    View Details
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { buildWhatsAppUrl } from '../config/whatsapp';

const formatPKR = (value) => {
  if (typeof value !== 'number') return '';
  return `PKR ${value.toLocaleString('en-PK')}`;
};

export const ProductCard = ({ product, showFullDetails = false }) => {
  const message = `Hello! I would like to order ${product.name}.
Quantity: [Please specify]
Delivery City: [Please specify]`;

  const whatsappUrl = buildWhatsAppUrl(message);

  return (
    <div
      className="hover-lift"
      style={{
        background: 'var(--bg-primary)',
        border: '1px solid var(--border-light)',
        borderRadius: '0px',
        padding: '0',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Product Image */}
      <Link to={product.link} style={{ display: "block" }} aria-label={"View details for " + product.name}>
      <div style={{ height: '280px', width: '100%', overflow: 'hidden', background: 'var(--bg-secondary)' }}>
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            loading="lazy"
          />
        ) : (
          <div className="placeholder-image" style={{ height: '100%', width: '100%' }}>
            Upload product image here
          </div>
        )}
      </div>
      </Link>

      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3
          style={{
            fontSize: '20px',
            fontWeight: '600',
            fontFamily: "'Playfair Display', serif",
            marginBottom: '8px',
            color: 'var(--text-primary)',
          }}
        >
          <Link to={product.link} style={{ color: "inherit", textDecoration: "none" }} aria-label={"View details for " + product.name}>{product.name}</Link>
        </h3>

        {/* Price */}
        {(product.price || product.oldPrice) && (
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '14px' }}>
            {product.oldPrice && (
              <span
                style={{
                  fontSize: '14px',
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
                  fontSize: '18px',
                  fontWeight: '600',
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
          className="body-small"
          style={{
            marginBottom: '16px',
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
            flex: showFullDetails ? 0 : 1,
          }}
        >
          {product.shortDescription}
        </p>

        {!showFullDetails && (
          <div style={{ marginBottom: '20px' }}>
            <p
              style={{
                fontSize: '12px',
                fontWeight: '600',
                fontFamily: "'Montserrat', sans-serif",
                color: 'var(--gold-dark)',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              Key Ingredients
            </p>
            <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
              {product.ingredients.slice(0, 3).join(', ')}
              {product.ingredients.length > 3 && '...'}
            </p>
          </div>
        )}

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: 'auto' }}>
          <Link
            to={product.link}
            className="btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}
          >
            Read More <ArrowRight size={14} />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ fontSize: '13px', padding: '12px 20px', minWidth: 'auto' }}
          >
            <MessageCircle size={16} />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
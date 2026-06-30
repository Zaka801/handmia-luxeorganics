import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPKR } from '../utils/money';

export const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <article className="product-card">
      <Link className="product-media" to={product.link} aria-label={`View details for ${product.name}`}>
        <span className="product-badge">{product.badge}</span>
        <img src={product.image} alt={product.name} loading="lazy" />
      </Link>

      <div className="product-card-body">
        <div>
          <p className="product-category">{product.category}</p>
          <h3>
            <Link to={product.link}>{product.name}</Link>
          </h3>
        </div>

        <p className="product-copy">{product.shortDescription}</p>

        <div className="product-meta">
          <div className="price-row">
            <strong>{formatPKR(product.price)}</strong>
            <span>{formatPKR(product.oldPrice)}</span>
          </div>
          <p>{product.ingredients.slice(0, 3).join(' + ')}</p>
        </div>

        <div className="product-actions">
          <button className="btn-primary" type="button" onClick={() => addItem(product)}>
            <ShoppingBag size={18} />
            Add to cart
          </button>
          <Link className="btn-ghost" to={product.link}>
            Details <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
};

import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Minus, Plus, ShoppingBag } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { productsData } from '../data/products';
import { formatPKR } from '../utils/money';

export const ProductDetail = () => {
  const { productId } = useParams();
  const product = productsData.find((item) => item.id === productId);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  if (!product) return <Navigate to="/products" replace />;

  const relatedProducts = productsData.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <div>
      <section className="product-detail">
        <div className="container">
          <Link className="back-link" to="/products">
            <ArrowLeft size={16} />
            Back to shop
          </Link>

          <div className="product-detail-grid">
            <div className="detail-media">
              <span className="product-badge">{product.badge}</span>
              <img src={product.image} alt={product.name} />
            </div>

            <div className="detail-copy">
              <p className="eyebrow">{product.category}</p>
              <h1>{product.name}</h1>
              <p>{product.shortDescription}</p>

              <div className="detail-price-row">
                <strong>{formatPKR(product.price)}</strong>
                <span>{formatPKR(product.oldPrice)}</span>
              </div>

              <div className="buy-box">
                <div className="quantity-stepper large">
                  <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} aria-label="Decrease quantity">
                    <Minus size={16} />
                  </button>
                  <span>{quantity}</span>
                  <button type="button" onClick={() => setQuantity((current) => Math.min(99, current + 1))} aria-label="Increase quantity">
                    <Plus size={16} />
                  </button>
                </div>

                <button className="btn-primary" type="button" onClick={() => addItem(product, quantity)}>
                  <ShoppingBag size={18} />
                  Add to cart
                </button>
              </div>

              <div className="detail-panels">
                <section>
                  <h2>Key ingredients</h2>
                  <ul>
                    {product.ingredients.map((ingredient) => (
                      <li key={ingredient}>
                        <Check size={18} />
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2>Benefits</h2>
                  <ul>
                    {product.benefits.map((benefit) => (
                      <li key={benefit}>
                        <Check size={18} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2>How to use</h2>
                  <p>{product.howToUse}</p>
                </section>

                <section>
                  <h2>Good for</h2>
                  <p>{product.goodFor}</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section shop-section soft">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Complete your cart</p>
              <h2>You may also like</h2>
            </div>
          </div>

          <div className="product-grid three">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

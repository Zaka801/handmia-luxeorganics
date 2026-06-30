import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, Heart, Leaf, ShieldCheck, ShoppingBag, Sparkles, Truck } from 'lucide-react';
import { CustomerReviews } from '../components/CustomerReviews';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { productsData } from '../data/products';
import { formatPKR } from '../utils/money';

export const Home = () => {
  const { addItem, openCart } = useCart();
  const featured = productsData[0];
  const previewProducts = productsData.slice(0, 3);

  const valueProps = [
    { icon: <Leaf size={22} />, title: 'Botanical formulas', text: 'Ingredient-led bars with aloe vera, rosehip, jojoba, honey, and vitamin E.' },
    { icon: <ShieldCheck size={22} />, title: 'Small-batch care', text: 'Gentle daily cleansing made in limited batches for a softer skin feel.' },
    { icon: <Truck size={22} />, title: 'Gift-ready delivery', text: 'Elegant soap shapes, careful packing, and free delivery on 3 or more bars.' },
  ];

  return (
    <div>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">H & Mia Luxe Organics</p>
            <h1>Handcrafted soap rituals for luminous everyday skin.</h1>
            <p>
              Discover small-batch skincare bars made with botanical oils, graceful shapes, and a clean WhatsApp invoice
              checkout for a more personal buying experience.
            </p>

            <div className="hero-actions">
              <Link className="btn-primary" to="/products">
                <ShoppingBag size={18} />
                Shop now
              </Link>
              <button className="btn-outline" type="button" onClick={openCart}>
                Open cart
              </button>
            </div>

            <div className="hero-stats">
              <div>
                <strong>25%</strong>
                <span>Launch edit</span>
              </div>
              <div>
                <strong>PKR 750</strong>
                <span>Per luxury bar</span>
              </div>
              <div>
                <strong>3+</strong>
                <span>Bars ship free</span>
              </div>
            </div>
          </div>

          <div className="hero-product-stage" aria-label="Featured product">
            <div className="hero-product-image">
              <span className="product-badge">Best seller</span>
              <img src={featured.image} alt={featured.name} />
            </div>
            <div className="hero-product-panel">
              <div>
                <p className="product-category">{featured.category}</p>
                <h2>{featured.name}</h2>
                <p>{featured.shortDescription}</p>
              </div>
              <div className="price-row">
                <strong>{formatPKR(featured.price)}</strong>
                <span>{formatPKR(featured.oldPrice)}</span>
              </div>
              <button className="btn-primary full-width" type="button" onClick={() => addItem(featured)}>
                <ShoppingBag size={18} />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="value-strip">
        <div className="container value-grid">
          {valueProps.map((item) => (
            <div className="value-item" key={item.title}>
              {item.icon}
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section shop-section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Signature collection</p>
              <h2>Luxury bars for every skin mood</h2>
            </div>
            <Link className="btn-ghost" to="/products">
              View all <ArrowRight size={16} />
            </Link>
          </div>

          <div className="product-grid">
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <CustomerReviews compact />

      <section className="section ritual-section">
        <div className="container ritual-grid">
          <div>
            <p className="eyebrow">Curated routines</p>
            <h2>Build a refined soap wardrobe for daily care and gifting.</h2>
            <p>
              Choose brightening, gentle family care, and calming shower bars in one cart. Every checkout creates a
              clear invoice with names, quantities, and prices before payment.
            </p>
            <div className="icon-list">
              <span>
                <BadgeCheck size={18} /> Clear invoice totals
              </span>
              <span>
                <Heart size={18} /> Gift-friendly shapes
              </span>
              <span>
                <Sparkles size={18} /> Premium daily care
              </span>
            </div>
          </div>

          <div className="mini-product-grid">
            {previewProducts.map((product) => (
              <button key={product.id} type="button" onClick={() => addItem(product)} aria-label={`Add ${product.name}`}>
                <img src={product.image} alt={product.name} />
                <span>{product.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

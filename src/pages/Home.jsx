import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Leaf, Shield, MessageCircle, ArrowRight } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { productsData } from '../data/products';
import { buildWhatsAppUrl } from '../config/whatsapp';

export const Home = () => {
  const whatsappUrl = buildWhatsAppUrl();

  const benefits = [
    { icon: <Leaf size={32} color="var(--gold-medium)" />, title: 'Pure & Natural', description: 'Handcrafted with premium natural oils and botanical extracts for authentic skincare.' },
    { icon: <Sparkles size={32} color="var(--gold-medium)" />, title: 'Visible Results', description: 'Experience noticeable improvements in skin texture, tone, and overall radiance.' },
    { icon: <Heart size={32} color="var(--gold-medium)" />, title: 'Made with Care', description: 'Every bar is lovingly crafted in small batches to ensure the highest quality.' },
    { icon: <Shield size={32} color="var(--gold-medium)" />, title: 'Skin-Friendly', description: 'Free from harsh chemicals, suitable for all skin types including sensitive skin.' },
  ];

  const testimonials = [
    { name: 'Ayesha K.', text: 'The Stress Relief Soap has become my evening ritual. The lavender scent is divine and my skin feels incredibly soft!', rating: 5 },
    { name: 'Fatima R.', text: "I've tried many soaps for my baby, but Baby Bear feels the gentlest. No irritation—just clean, happy skin.", rating: 5 },
    { name: 'Sara M.', text: 'The Collagen Booster Soap is a game-changer! My skin feels smoother and looks more radiant after just two weeks.', rating: 5 },
  ];

  const faqs = [
    { question: 'Do you ship across Pakistan?', answer: 'Yes! We deliver to all major cities in Pakistan. Shipping details will be confirmed via WhatsApp after your order.' },
    { question: 'Are these soaps suitable for sensitive skin?', answer: 'All our soaps are formulated with skin-friendly ingredients and are free from harsh chemicals. We still recommend patch testing if you have specific allergies.' },
    { question: 'How long does each soap bar last?', answer: 'With proper care and storage in a dry place, each soap bar typically lasts 3–4 weeks with regular use.' },
    { question: 'How do I place an order?', answer: 'Click “Order on WhatsApp” on any product, then share your quantity and delivery city. We will confirm your order details.' },
  ];

  return (
    <div>

      {/* Hero */}
      <section style={{
        backgroundImage:
          "linear-gradient(rgba(255,254,242,0.88), rgba(246,245,232,0.92)), url('/images/hero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 0 100px',
        textAlign: 'center'
      }}>
        <div className="container">

          <h1 className="hero-large" style={{ marginBottom: '24px', maxWidth: '900px', margin: '0 auto 24px' }}>
            Pure Ingredients. Visible Results.<br />Everyday Luxury.
          </h1>

          <p className="body-large" style={{ maxWidth: '700px', margin: '0 auto 40px', color: 'var(--text-secondary)' }}>
            Premium handmade soaps crafted for glow, calm, and gentle care.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/products" className="btn-primary">
              Explore Products <ArrowRight size={18} />
            </Link>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
              <MessageCircle size={18} />
              Order on WhatsApp
            </a>
          </div>

          {/* NEW OFFER BAR */}
          <div style={{
            marginTop: "30px",
            display: "inline-block",
            padding: "12px 20px",
            border: "1px solid var(--gold-medium)",
            background: "rgba(255,254,242,0.9)",
            fontFamily: "Montserrat, sans-serif",
            letterSpacing: "0.5px"
          }}>
            🔥 <strong>Flat 50% OFF</strong> on all soaps (PKR <s>900</s> → <strong>450</strong>)  
            <br />
            🎁 Bundle Offer: <strong>Any 3 soaps only PKR 1200</strong> (instead of 2700)
          </div>

        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding why-choose" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">

          <h2 className="heading-1" style={{ textAlign: 'center', marginBottom: '60px' }}>
            Why Choose H & Mia
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '32px 20px' }}>
                <div style={{ marginBottom: '20px' }}>{b.icon}</div>
                <h3 className="heading-3" style={{ marginBottom: '12px' }}>{b.title}</h3>
                <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>{b.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">

          <h2 className="heading-1" style={{ textAlign: 'center', marginBottom: '60px' }}>
            Our Signature Collection
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            marginBottom: '40px'
          }}>
            {productsData.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/products" className="btn-secondary">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* Promise */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="heading-1" style={{ marginBottom: '24px' }}>Our Ingredients Promise</h2>
            <p className="body-large" style={{ marginBottom: '40px', color: 'var(--text-secondary)' }}>
              We believe in transparency and quality. Every H & Mia soap is crafted with premium ingredients that nourish and care for your skin.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', marginTop: '48px' }}>
              <div>
                <h3 className="heading-3" style={{ color: 'var(--gold-dark)', marginBottom: '12px' }}>Natural Oils</h3>
                <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                  Rosehip, jojoba, coconut, and olive oils for deep nourishment
                </p>
              </div>
              <div>
                <h3 className="heading-3" style={{ color: 'var(--gold-dark)', marginBottom: '12px' }}>Skin-Friendly</h3>
                <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                  Gentle formulas suitable for all skin types, even sensitive
                </p>
              </div>
              <div>
                <h3 className="heading-3" style={{ color: 'var(--gold-dark)', marginBottom: '12px' }}>No Harsh Chemicals</h3>
                <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                  Free from parabens, sulfates, and unnecessary additives
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="heading-1" style={{ textAlign: 'center', marginBottom: '60px' }}>What Our Customers Say</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: 'var(--bg-secondary)', padding: '32px', border: '1px solid var(--border-light)', borderRadius: '0px' }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(t.rating)].map((_, j) => <span key={j} style={{ color: 'var(--gold-medium)', fontSize: '20px' }}>★</span>)}
                </div>
                <p className="body-regular" style={{ marginBottom: '20px', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                  “{t.text}”
                </p>
                <p style={{ fontSize: '14px', fontWeight: '600', fontFamily: "'Montserrat', sans-serif", color: 'var(--text-primary)' }}>
                  — {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="section-padding-small" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '40px' }}>How to Order</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
            {[{n:1,t:'Click WhatsApp Order',d:'Choose your product and click the WhatsApp button'},{n:2,t:'Share Details',d:'Tell us quantity and your delivery city'},{n:3,t:'Confirm Delivery',d:"We'll confirm your order and delivery details"}].map((s) => (
              <div key={s.n} style={{ textAlign: 'center' }}>
                <div style={{ width:'60px', height:'60px', borderRadius:'50%', background:'var(--gold-medium)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px', fontWeight:'600', margin:'0 auto 20px' }}>
                  {s.n}
                </div>
                <h3 className="heading-3" style={{ marginBottom: '12px' }}>{s.t}</h3>
                <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="heading-1" style={{ textAlign: 'center', marginBottom: '60px' }}>Frequently Asked Questions</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ marginBottom: '32px', paddingBottom: '32px', borderBottom: i !== faqs.length - 1 ? '1px solid var(--border-light)' : 'none' }}>
                <h3 className="heading-3" style={{ marginBottom: '12px' }}>{f.question}</h3>
                <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--bg-secondary)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="heading-1" style={{ marginBottom: '20px' }}>Ready to Experience Luxury?</h2>
          <p className="body-large" style={{ marginBottom: '32px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 32px' }}>
            Discover the H & Mia difference. Order now and treat your skin to the care it deserves.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <MessageCircle size={18} />
            Order on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

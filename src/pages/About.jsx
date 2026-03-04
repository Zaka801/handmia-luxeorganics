import React from 'react';
import { Heart, Award, Shield, Users } from 'lucide-react';

export const About = () => {
  return (
    <div>
      <section style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)', padding: '100px 0 80px', textAlign: 'center' }}>
        <div className="container">
          <h1 className="hero-medium" style={{ marginBottom: '24px' }}>About H & Mia</h1>
          <p className="body-large" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Bringing you premium handmade soaps crafted with care and skin-friendly ingredients in Pakistan.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="heading-1" style={{ marginBottom: '32px', textAlign: 'center' }}>Our Story</h2>
            <div style={{ marginBottom: '32px' }}>
              <p className="body-large" style={{ marginBottom: '24px', color: 'var(--text-secondary)', lineHeight: '1.9' }}>
                H & Mia was born from a simple belief: everyone deserves access to premium, ingredient-focused skincare that feels luxurious and works with your daily routine.
              </p>
              <p className="body-large" style={{ marginBottom: '24px', color: 'var(--text-secondary)', lineHeight: '1.9' }}>
                Every bar is handcrafted in small batches with careful attention to quality. We select oils and botanical extracts—lavender, rosehip, jojoba, neem, and more—to create formulas that cleanse gently and leave skin feeling comfortable.
              </p>
              <p className="body-large" style={{ color: 'var(--text-secondary)', lineHeight: '1.9' }}>
                Based in Pakistan, we proudly serve customers nationwide who value authenticity, quality, and the luxury of everyday self-care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="heading-1" style={{ textAlign: 'center', marginBottom: '60px' }}>Our Mission & Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            {[
              { icon: <Heart size={40} color="var(--gold-medium)" />, title: 'Made with Care', desc: 'Every product is crafted with genuine attention to detail.' },
              { icon: <Shield size={40} color="var(--gold-medium)" />, title: 'Purity', desc: 'We choose skin-friendly ingredients and avoid harsh additives.' },
              { icon: <Award size={40} color="var(--gold-medium)" />, title: 'Consistency', desc: 'Small-batch standards you can trust, every time.' },
              { icon: <Users size={40} color="var(--gold-medium)" />, title: 'Customer First', desc: 'Your satisfaction is our priority—from order to delivery.' },
            ].map((x) => (
              <div key={x.title} style={{ background: 'var(--bg-primary)', padding: '32px', border: '1px solid var(--border-light)', textAlign: 'center' }}>
                <div style={{ marginBottom: '20px' }}>{x.icon}</div>
                <h3 className="heading-3" style={{ marginBottom: '16px' }}>{x.title}</h3>
                <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="heading-1" style={{ marginBottom: '32px' }}>Our Promise to You</h2>
            <div style={{ background: 'var(--bg-secondary)', padding: '48px', border: '1px solid var(--border-light)' }}>
              <p className="body-large" style={{ marginBottom: '24px', color: 'var(--text-primary)', lineHeight: '1.9' }}>
                We promise transparency, quality, and a premium experience—without compromising on skin comfort.
              </p>
              <p className="body-large" style={{ color: 'var(--text-primary)', lineHeight: '1.9', fontWeight: '500' }}>
                Most importantly, we promise to keep delivering the everyday luxury that makes H & Mia your trusted skincare companion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-small" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="heading-2" style={{ marginBottom: '24px' }}>Why Natural Ingredients Matter</h2>
            <p className="body-regular" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '32px' }}>
              Your skin is your body’s largest organ—what you use daily matters. Ingredient-focused formulas can help maintain softness, comfort, and a healthy-looking glow.
            </p>
            <p style={{ fontSize: '16px', fontWeight: '500', fontFamily: "'Montserrat', sans-serif", color: 'var(--gold-dark)', fontStyle: 'italic' }}>
              “Nature provides. We perfect. You glow.”
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

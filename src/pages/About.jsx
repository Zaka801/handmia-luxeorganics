import React from 'react';
import { Award, Heart, Shield, Sparkles, Users } from 'lucide-react';

export const About = () => {
  const values = [
    { icon: <Heart size={28} />, title: 'Made with care', text: 'Every bar is crafted in small batches with close attention to texture, scent, and skin feel.' },
    { icon: <Shield size={28} />, title: 'Skin comfort', text: 'We choose gentle oils, butters, and botanical extracts for daily routines.' },
    { icon: <Award size={28} />, title: 'Consistent quality', text: 'Our formulas are designed to feel premium from first wash to the final use.' },
    { icon: <Users size={28} />, title: 'Customer first', text: 'Orders, questions, and payment confirmations stay simple through WhatsApp.' },
  ];

  return (
    <div>
      <section className="page-hero compact">
        <div className="container">
          <p className="eyebrow">About H & Mia</p>
          <h1>Small-batch skincare with a softer kind of luxury.</h1>
          <p>Premium handmade soaps crafted with pure ingredients for customers across Pakistan.</p>
        </div>
      </section>

      <section className="section about-story">
        <div className="container content-grid">
          <div className="copy-stack">
            <p className="eyebrow">Our story</p>
            <h2>Everyday care should feel beautiful, honest, and easy to love.</h2>
          </div>
          <div className="copy-stack">
            <p>
              H & Mia was born from a simple belief: everyone deserves access to ingredient-focused skincare that feels
              luxurious and works beautifully in a daily routine.
            </p>
            <p>
              We select oils and botanical extracts like lavender, rosehip, jojoba, neem, aloe vera, honey, and vitamin E
              to create formulas that cleanse gently and leave skin feeling comfortable.
            </p>
            <p>
              Our focus is simple: premium soap shapes, reliable quality, clear pricing, and a warm buying experience
              from cart to delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="section shop-section soft">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Values</p>
              <h2>What guides every bar</h2>
            </div>
          </div>

          <div className="feature-grid">
            {values.map((value) => (
              <article className="feature-card" key={value.title}>
                {value.icon}
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section quote-band">
        <div className="container">
          <Sparkles size={30} />
          <h2>Nature provides. We perfect. You glow.</h2>
          <p>That promise sits behind every H & Mia soap, every invoice, and every customer conversation.</p>
        </div>
      </section>
    </div>
  );
};

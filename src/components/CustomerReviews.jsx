import React from 'react';
import { Star } from 'lucide-react';
import { customerReviews } from '../data/reviews';

const FiveStars = () => (
  <div className="review-stars" aria-label="5 star rating">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star key={star} size={16} fill="currentColor" />
    ))}
  </div>
);

export const CustomerReviews = ({ compact = false }) => {
  const reviews = compact ? customerReviews.slice(0, 6) : customerReviews;

  return (
    <section className={`section reviews-section ${compact ? 'compact' : ''}`}>
      <div className="container">
        <div className="section-head reviews-head">
          <div>
            <h2>Customer reviews</h2>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <FiveStars />
              <p>{review.text}</p>
              <div className="review-author">
                <span>{review.name.charAt(0)}</span>
                <strong>{review.name}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

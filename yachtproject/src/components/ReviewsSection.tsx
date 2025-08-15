import React, { useRef } from 'react';
import styles from './ReviewsSection.module.css';
import '../styles/typography.css';

const ReviewsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      name: 'Jennifer & Mark Thompson',
      rating: 5,
      date: 'August 2024',
      event: 'Anniversary Celebration',
      review: 'Absolutely magical experience! Captain Michael made our 25th anniversary unforgettable. The yacht was pristine, the route was breathtaking, and the service was impeccable. We saw dolphins and enjoyed the most beautiful sunset. Highly recommend!',
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Tech Solutions Corp',
      rating: 5,
      date: 'July 2024',
      event: 'Corporate Event',
      review: 'Outstanding corporate charter experience. The crew was professional, the yacht was perfect for our team building event. Great communication throughout the planning process. Our employees are still talking about it!',
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'The Rodriguez Family',
      rating: 5,
      date: 'June 2024',
      event: 'Family Reunion',
      review: 'Captain Sarah was amazing with our kids and made everyone feel safe and welcome. The yacht had everything we needed for our family reunion. The fishing was great and the views were spectacular. Will definitely book again!',
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'David & Lisa Chen',
      rating: 5,
      date: 'September 2024',
      event: 'Wedding Celebration',
      review: 'Our wedding charter exceeded all expectations! Captain James went above and beyond to make our special day perfect. The yacht was beautifully decorated, and the crew was attentive to every detail. Magical!',
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Adventure Seekers Group',
      rating: 5,
      date: 'May 2024',
      event: 'Wildlife Tour',
      review: 'Captain Emma\'s knowledge of marine life was incredible! We saw orcas, seals, and so many birds. Her passion for conservation really enhanced our experience. Educational and thrilling at the same time!',
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Robert & Susan Miller',
      rating: 5,
      date: 'October 2024',
      event: 'Retirement Party',
      review: 'Perfect way to celebrate retirement! The sunset cruise was peaceful and beautiful. The crew took care of everything, allowing us to just relax and enjoy. The catering was excellent too. Thank you for the memories!',
      avatar: '/api/placeholder/60/60'
    }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>What Our Guests Say</h2>
          <p>Real experiences from real customers</p>
        </div>
        <div className={styles.reviewsContainer}>
          <button className={styles.scrollButton} onClick={scrollLeft}>‹</button>
          <div className={styles.reviewsScroll} ref={scrollRef}>
            {reviews.map((review, index) => (
              <div key={index} className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                  <div className={styles.reviewerInfo}>
                    <img src={review.avatar} alt={review.name} className={styles.avatar} />
                    <div>
                      <h4>{review.name}</h4>
                      <span className={styles.eventType}>{review.event}</span>
                    </div>
                  </div>
                  <div className={styles.reviewMeta}>
                    <div className={styles.rating}>{renderStars(review.rating)}</div>
                    <span className={styles.date}>{review.date}</span>
                  </div>
                </div>
                <p className={styles.reviewText}>{review.review}</p>
              </div>
            ))}
          </div>
          <button className={styles.scrollButton} onClick={scrollRight}>›</button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
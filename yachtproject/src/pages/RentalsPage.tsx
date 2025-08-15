import React, { useRef } from 'react';
import styles from './Rental.module.css';
import '../styles/typography.css';
import RentalCard from '../components/RentalCards';
import CaptainsSection from '../components/CaptainsSection';
import ReviewsSection from '../components/ReviewsSection';
import CTASection from '../components/CTASection';
import r1 from '../assets/H2.webp';
import r2 from '../assets/b1.webp';
import m2 from '../assets/contact.webp';

const RentalPage: React.FC = () => {
  const packagesRef = useRef<HTMLElement>(null);

  const MoveToListings = () => {
    packagesRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const rentalFeatures = [
    { icon: '🚤', title: 'Premium Fleet', desc: 'Modern, well-maintained vessels' },
    { icon: '⚓', title: 'Full Service', desc: 'Captain, crew, and provisions included' },
    { icon: '🌊', title: 'Scenic Routes', desc: 'Explore Vancouver\'s stunning coastline' },
    { icon: '🎉', title: 'Event Ready', desc: 'Perfect for celebrations and gatherings' },
    { icon: '🛡️', title: 'Fully Insured', desc: 'Complete coverage and safety certified' },
    { icon: '🏆', title: '5-Star Service', desc: 'Exceptional customer satisfaction' }
  ];

  return (
    <div className={styles.rentalPage}>
      {/* Hero Section */}
      <section className={styles.heroSection} style={{ backgroundImage: `url(${r1})` }}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Vancouver Yacht Charters</h1>
            <p>We offer charter experiences for any occasion, from family outings to celebrations. Experience the beauty of British Columbia's coastline aboard our luxury vessels.</p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>150+</span>
                <span className={styles.statLabel}>Successful Charters</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>5★</span>
                <span className={styles.statLabel}>Average Rating</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>12</span>
                <span className={styles.statLabel}>Luxury Vessels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <div className={styles.introText}>
              <h2>Luxury Charter Experiences</h2>
              <p>Discover the breathtaking beauty of Vancouver's waters with our premium yacht charter services. Whether you're planning a romantic getaway, corporate event, or family celebration, we provide unforgettable experiences on the water.</p>
              <div className={styles.benefitsList}>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>✓</span>
                  <span>Professional licensed captains</span>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>✓</span>
                  <span>Gourmet catering options available</span>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>✓</span>
                  <span>Flexible itineraries and destinations</span>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>✓</span>
                  <span>All safety equipment included</span>
                </div>
              </div>
            </div>
            <div className={styles.introImage}>
              <img src={r2} alt="Luxury yacht charter experience" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Why Choose Our Charter Service</h2>
            <p>Experience the difference with our premium yacht charter offerings</p>
          </div>
          <div className={styles.featuresGrid}>
            {rentalFeatures.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section ref={packagesRef} className={styles.packagesSection} style={{ backgroundImage: `url(${r2})` }}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 style={{ color: 'white' }}>Charter Packages</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Choose the perfect package for your adventure</p>
          </div>
          <div className={styles.packagesContent}>
            <RentalCard />
          </div>
        </div>
      </section>

      {/* Captains Section */}
      <CaptainsSection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* CTA Section */}
      <CTASection
        title="Ready to Set Sail?"
        subtitle="Book your unforgettable yacht charter experience today and create memories that will last a lifetime."
        buttonText="Book Your Charter"
        backgroundImage={m2}
        onButtonClick={MoveToListings}
      />
    </div>
  );
};

export default RentalPage;
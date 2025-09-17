import React from 'react';
import styles from './YachtHeroSection.module.css';
import { YachtData } from '../../data/yachtsData';

interface YachtHeroSectionProps {
  yacht: YachtData;
}

const YachtHeroSection: React.FC<YachtHeroSectionProps> = ({ yacht }) => {
  const handleCheckAvailability = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      const elementPosition = bookingSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80; // Add some offset
      
      console.log('Scrolling to:', offsetPosition);
      
      // Try with requestAnimationFrame for better smoothness
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 1000; // 1 second
      let start: number | null = null;

      function step(timestamp: number) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function for smooth animation
        const ease = percentage < 0.5 
          ? 2 * percentage * percentage 
          : -1 + (4 - 2 * percentage) * percentage;
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (progress < duration) {
          requestAnimationFrame(step);
        }
      }
      
      requestAnimationFrame(step);
    }
  };


  // Extract capacity number from specifications
  const capacityNumber = yacht.specifications.capacity.replace(/[^0-9]/g, '');

  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroInfo}>
          {/* Yacht Type/Category */}
          <div className={styles.infoItem}>
            <div className={styles.iconContainer}>
              <span className={styles.icon}>⛵</span>
            </div>
            <div className={styles.infoContent}>
              <span className={styles.infoLabel}>Yacht</span>
              <span className={styles.infoValue}>46ft</span>
            </div>
          </div>

          {/* Rental Type */}
          <div className={styles.infoItem}>
            <div className={styles.iconContainer}>
              <span className={styles.icon}>🏖️</span>
            </div>
            <div className={styles.infoContent}>
              <span className={styles.infoLabel}>Rental</span>
              <span className={styles.infoValue}>Daily/Hourly</span>
            </div>
          </div>

          {/* Capacity */}
          <div className={styles.infoItem}>
            <div className={styles.iconContainer}>
              <span className={styles.icon}>👥</span>
            </div>
            <div className={styles.infoContent}>
              <span className={styles.infoLabel}>{capacityNumber}</span>
              <span className={styles.infoValue}>Guests</span>
            </div>
          </div>

          {/* Location */}
          <div className={styles.infoItem}>
            <div className={styles.iconContainer}>
              <span className={styles.icon}>📍</span>
            </div>
            <div className={styles.infoContent}>
              <span className={styles.infoLabel}>{yacht.location}</span>
              <span className={styles.infoValue}>Marina</span>
            </div>
          </div>

          {/* Price Per Hour */}
          <div className={styles.infoItem}>
            <div className={styles.iconContainer}>
              <span className={styles.icon}>💰</span>
            </div>
            <div className={styles.infoContent}>
              <span className={styles.infoLabel}>{yacht.pricePerHour}</span>
              <span className={styles.infoValue}>Starting</span>
            </div>
          </div>
        </div>

        {/* Check Availability Button */}
        <div className={styles.actionSection}>
          <button 
            className={styles.checkAvailabilityBtn}
            onClick={handleCheckAvailability}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default YachtHeroSection;
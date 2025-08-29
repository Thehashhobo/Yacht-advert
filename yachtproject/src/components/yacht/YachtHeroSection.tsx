import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './YachtHeroSection.module.css';
import { YachtData } from '../../data/yachtsData';

interface YachtHeroSectionProps {
  yacht: YachtData;
}

const YachtHeroSection: React.FC<YachtHeroSectionProps> = ({ yacht }) => {
  const navigate = useNavigate();

  const handleCheckAvailability = () => {
    // Navigate to booking form or contact page
    navigate('/', { state: { selectedYacht: yacht.title } });
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
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default YachtHeroSection;
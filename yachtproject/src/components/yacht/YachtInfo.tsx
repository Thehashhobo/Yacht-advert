import React from 'react';
import styles from './YachtInfo.module.css';

interface YachtInfoProps {
  title: string;
  description: string;
  features: string[];
  amenities: string[];
}

const YachtInfo: React.FC<YachtInfoProps> = ({ title, description, features, amenities }) => {
  return (
    <div className={styles.yachtInfo}>
      <section className={styles.descriptionSection}>
        <h2>About {title}</h2>
        <p className={styles.description}>{description}</p>
      </section>

      <section className={styles.featuresSection}>
        <h3>Key Features</h3>
        <div className={styles.featuresList}>
          {features.map((feature, index) => (
            <span key={index} className={styles.featureTag}>
              {feature}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.amenitiesSection}>
        <h3>Amenities & Equipment</h3>
        <div className={styles.amenitiesGrid}>
          {amenities.map((amenity, index) => (
            <div key={index} className={styles.amenityItem}>
              <span className={styles.amenityIcon}>✓</span>
              <span className={styles.amenityText}>{amenity}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default YachtInfo;
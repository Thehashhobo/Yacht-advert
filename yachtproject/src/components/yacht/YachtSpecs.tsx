import React from 'react';
import styles from './YachtSpecs.module.css';

interface YachtSpecsProps {
  specifications: {
    length: string;
    capacity: string;
    bedrooms: string;
    bathrooms: string;
    crew: string;
    speed: string;
  };
}

const YachtSpecs: React.FC<YachtSpecsProps> = ({ specifications }) => {
  return (
    <div className={styles.specificationsCard}>
      <h3>Yacht Specifications</h3>
      <div className={styles.specsList}>
        <div className={styles.specItem}>
          <span className={styles.specLabel}>Length:</span>
          <span className={styles.specValue}>{specifications.length}</span>
        </div>
        <div className={styles.specItem}>
          <span className={styles.specLabel}>Capacity:</span>
          <span className={styles.specValue}>{specifications.capacity}</span>
        </div>
        <div className={styles.specItem}>
          <span className={styles.specLabel}>Bedrooms:</span>
          <span className={styles.specValue}>{specifications.bedrooms}</span>
        </div>
        <div className={styles.specItem}>
          <span className={styles.specLabel}>Bathrooms:</span>
          <span className={styles.specValue}>{specifications.bathrooms}</span>
        </div>
        <div className={styles.specItem}>
          <span className={styles.specLabel}>Crew:</span>
          <span className={styles.specValue}>{specifications.crew}</span>
        </div>
        <div className={styles.specItem}>
          <span className={styles.specLabel}>Max Speed:</span>
          <span className={styles.specValue}>{specifications.speed}</span>
        </div>
      </div>
    </div>
  );
};

export default YachtSpecs;
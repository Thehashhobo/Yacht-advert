import React from 'react';
import styles from './Rental.module.css'; // Importing page-specific CSS
import '../styles/typography.css'; // Import global typography styles
import RentalCard from '../components/RentalCards';
import r1 from '../assets/H2.webp';
import background1 from '../assets/b1.webp';

const RentalPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className={styles.outerDivR}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url(${r1})`,
        }}
      >
        <div className={styles.rHero}>
          <h1>Vancouver Yacht Charters</h1>
          <h3>We offer charter experiences for any occasion, from family outings to celebrations.</h3>
        </div>
      </div>

      {/* Packages Section */}
      <div className={styles.outerDivR} style={{ backgroundColor: 'black' }}>
        <div
          className={styles.backgroundLayer}
          style={{ backgroundImage: `url(${background1})` }}
        ></div>

        <div className={styles.introContainerR}>
          <h1>Choose a Package</h1>
          <p style={{ marginTop: '0.3rem', marginBottom: '-2rem' }}></p>
          <RentalCard />
        </div>
      </div>
    </>
  );
};

export default RentalPage;

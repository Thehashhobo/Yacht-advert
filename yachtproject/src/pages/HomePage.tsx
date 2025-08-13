import React from 'react';
import styles from './Home.module.css';  // Importing Home page-specific styles
import '../styles/typography.css';  // Import global typography styles
import FlexCardGrid from '../components/FlexCardGrid';
import GeneralForm from '../components/GeneralForm';
import RentalService from '../components/RentalService';
import big_img from '../assets/H1.jpg';
import background1 from '../assets/b3.jpg';
import RentalCards from '../components/RentalCards';
import background2 from '../assets/b3.webp';


const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className={styles.outerDivHero}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(196, 228, 255, 0.25), rgba(168, 162, 255, 0.1)), url(${big_img})`,
        }}
      >
        <div className={styles.heroContent}>
          <h1>Ocean Wave</h1>
          <h3>YACHT RENTAL, SERVICES AND MANAGEMENT CENTRE</h3>
          <p>In The Greater Vancouver Area</p>
          <div className={styles.PurchaseButtonContainer}>
            <button className={styles.PurchaseButton}>
              Buy Tickets
            </button>
            <button className={styles.PurchaseButton}>
              Charter Boats
            </button>
          </div>

        </div>
      </div>

      {/* rental Section */}

        <div className={styles.rentalContainer}>
          <div className={styles.introText}>
            <h4>Ocean Wave</h4>
            <h3>YACHT CHARTERS SINCE 2020</h3>
            <RentalService/>
            {/* <p>Trusted and established Yacht services provider</p> */}
            <RentalCards/>
          </div>

      </div>

      {/* Intro Section */}
      <div className={styles.outerDiv}>
        <div
          className={styles.backgroundLayer}
          style={{ backgroundImage: `url(${background1})`, opacity: "0.5"}}
        ></div>
        <div className={styles.introContainer}>
          <div className={styles.introText}>
            <h4>Ocean Wave</h4>
            <h3>YACHT MANAGEMENT, SERVICES, REPAIRS AND RENTAL CENTRE</h3>
            <p>Trusted and established Yacht services provider</p>
          </div>
          <FlexCardGrid />
        </div>
      </div>

      {/* Form Section */}
      <div
        className={styles.formContainer}
        style={{ backgroundImage: `url(${background2})` }}
      >
        <div className={styles.formContent}>
          <h2 className={styles.intouch}>Get in Touch!</h2>
          <GeneralForm />
        </div>
      </div>
    </>
  );
};

export default HomePage;

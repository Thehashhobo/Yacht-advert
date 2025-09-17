import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { yachtsData } from '../../data/yachtsData';
import YachtGallery from '../../components/yacht/YachtGallery';
import YachtInfo from '../../components/yacht/YachtInfo';
import YachtSpecs from '../../components/yacht/YachtSpecs';
import YachtBooking from '../../components/yacht/YachtBooking';
import YachtHeroSection from '../../components/yacht/YachtHeroSection';
import styles from './YachtPage.module.css';



const YallaHabibi: React.FC = () => {
  // const navigate = useNavigate();
  const yacht = yachtsData.find(y => y.id === 'party-boat')!;

  return (
    <div className={styles.yachtPage}>
      <YachtGallery images={yacht.images} title={yacht.title} />

      {/* Custom header for party boat */}
      <YachtHeroSection yacht={yacht} />

      <div className={styles.contentGrid}>
        <div className={styles.mainContent}>
          <YachtInfo 
            title={yacht.title}
            description={yacht.description}
            features={yacht.features}
            amenities={yacht.amenities}
          />
          
          {/* Party-specific packages */}
          <div className={styles.customSection}>
            <h3>Party Packages</h3>
            <div className={styles.packagesList}>
              <div className={styles.packageItem}>
                <h4>Birthday Bash Package</h4>
                <p>Complete birthday party setup with decorations and cake service</p>
              </div>
              <div className={styles.packageItem}>
                <h4>Bachelor/Bachelorette Special</h4>
                <p>Ultimate pre-wedding celebration with premium amenities</p>
              </div>
              <div className={styles.packageItem}>
                <h4>Corporate Event Package</h4>
                <p>Professional team building and corporate entertainment</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sidebar}>
          <YachtBooking 
            pricePerHour={yacht.pricePerHour}
            // pricePerDay={yacht.pricePerDay}
            availability={yacht.addOn}
            scheduleId={yacht.scheduleId}
            scheduleIdName={yacht.scheduleName}
            yachtTitle={yacht.title}
          />
          <YachtSpecs specifications={yacht.specifications} />
        </div>
      </div>
      {/* Custom party-specific features */}
      <div className={styles.partyFeatures}>
        <h2>Party Experience</h2>
        <div className={styles.partyGrid}>
          <div className={styles.partyCard}>
            <span className={styles.partyIcon}>🎵</span>
            <h3>DJ & Sound System</h3>
            <p>Professional-grade audio equipment and DJ booth for the perfect party atmosphere</p>
          </div>
          <div className={styles.partyCard}>
            <span className={styles.partyIcon}>💃</span>
            <h3>Dance Floor</h3>
            <p>Spacious dance area with LED lighting for an unforgettable party experience</p>
          </div>
          <div className={styles.partyCard}>
            <span className={styles.partyIcon}>🍸</span>
            <h3>Full Bar Setup</h3>
            <p>Complete bar facilities with professional bartender service available</p>
          </div>
          <div className={styles.partyCard}>
            <span className={styles.partyIcon}>🎤</span>
            <h3>Karaoke System</h3>
            <p>Sing your heart out with our premium karaoke setup</p>
          </div>
        </div>
        <YachtSpecs specifications={yacht.specifications} />
      </div>
    </div>
  );
};

export default YallaHabibi;
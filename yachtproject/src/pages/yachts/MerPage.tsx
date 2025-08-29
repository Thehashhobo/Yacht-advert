import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { yachtsData } from '../../data/yachtsData';
import YachtGallery from '../../components/yacht/YachtGallery';
import YachtHeroSection from '../../components/yacht/YachtHeroSection';
import YachtInfo from '../../components/yacht/YachtInfo';
import YachtSpecs from '../../components/yacht/YachtSpecs';
import YachtBooking from '../../components/yacht/YachtBooking';
import styles from './YachtPage.module.css';

const Meridian: React.FC = () => {
  // const navigate = useNavigate();
  const yacht = yachtsData.find(y => y.id === 'luxury-cruiser')!;

  return (
    <div className={styles.yachtPage}>
      {/* Reusable gallery component */}
      <YachtGallery images={yacht.images} title={yacht.title} />

      {/* Custom header for this specific yacht */}
      <YachtHeroSection yacht={yacht} />
      {/* Content grid with reusable components */}
      <div className={styles.contentGrid}>
        <div className={styles.mainContent}>
          <YachtInfo 
            title={yacht.title}
            description={yacht.description}
            features={yacht.features}
            amenities={yacht.amenities}
          />
          
          {/* Custom section for luxury cruiser */}
          <div className={styles.customSection}>
            <h3>Perfect For</h3>
            <div className={styles.occasionsList}>
              <div className={styles.occasionItem}>Anniversary Celebrations</div>
              <div className={styles.occasionItem}>Corporate Events</div>
              <div className={styles.occasionItem}>Romantic Getaways</div>
              <div className={styles.occasionItem}>Special Occasions</div>
            </div>
          </div>
        </div>
        

        <div className={styles.sidebar}>
          <YachtBooking 
            pricePerHour={yacht.pricePerHour}
            pricePerDay={yacht.pricePerDay}
            availability={yacht.availability}
            yachtId={yacht.id}
            yachtTitle={yacht.title}
          />
        </div>     
      </div>
      {/* Custom content specific to luxury cruiser */}
      <div className={styles.luxuryFeatures}>
        <h2>Luxury Experience Highlights</h2>
        <div className={styles.highlightGrid}>
          <div className={styles.highlightCard}>
            <span className={styles.highlightIcon}>🥂</span>
            <h3>Premium Service</h3>
            <p>Professional crew dedicated to your comfort and luxury experience</p>
          </div>
          <div className={styles.highlightCard}>
            <span className={styles.highlightIcon}>🍽️</span>
            <h3>Gourmet Catering</h3>
            <p>World-class dining options prepared by our certified chefs</p>
          </div>
          <div className={styles.highlightCard}>
            <span className={styles.highlightIcon}>🌅</span>
            <h3>Scenic Routes</h3>
            <p>Exclusive access to Vancouver's most beautiful waterways</p>
          </div>
        </div>
      </div>
       <YachtSpecs specifications={yacht.specifications} />
    </div>
  );
};

export default Meridian;
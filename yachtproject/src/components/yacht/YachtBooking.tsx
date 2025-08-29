import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './YachtBooking.module.css';

interface YachtBookingProps {
  pricePerHour: string;
  pricePerDay: string;
  availability: string[];
  yachtId: string;
  yachtTitle: string;
}

const YachtBooking: React.FC<YachtBookingProps> = ({ 
  pricePerHour, 
  pricePerDay, 
  availability, 
  yachtId,
  yachtTitle 
}) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    // Navigate to booking form or external booking system
    console.log(`Booking ${yachtTitle} (${yachtId})`);
    // You can navigate to a booking page or open a modal
    // navigate(`/book/${yachtId}`);
  };

  const handleInquire = () => {
    // Navigate to contact form with yacht info pre-filled
    navigate('/', { state: { selectedYacht: yachtTitle } });
  };

  return (
    <div className={styles.bookingCard}>
      <h3>Book This Yacht</h3>
      <div className={styles.priceDisplay}>
        <span className={styles.priceAmount}>{pricePerHour}</span>
        <span className={styles.priceUnit}>per hour</span>
                <span className={styles.priceAmount}>{pricePerDay}</span>
        <span className={styles.priceUnit}>per day</span>
      </div>
      
      <div className={styles.availabilitySection}>
        <h4>Availability</h4>
        <ul className={styles.availabilityList}>
          {availability.map((item, index) => (
            <li key={index} className={styles.availabilityItem}>
              <span className={styles.availabilityIcon}>📅</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.buttonGroup}>
        <button 
          className={styles.bookNowButton}
          onClick={handleBookNow}
        >
          Book Now
        </button>
        <button 
          className={styles.inquireButton}
          onClick={handleInquire}
        >
          Send Inquiry
        </button>
      </div>

      <div className={styles.contactInfo}>
        <p className={styles.contactText}>
          Questions? Call us at <a href="tel:+1234567890">(778) 989-8588</a>
        </p>
      </div>
    </div>
  );
};

export default YachtBooking;
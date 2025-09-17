import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './YachtBooking.module.css';
import SuperSaaSWidget from './SuperSaaSWidget';

interface YachtBookingProps {
  pricePerHour: string;
  // pricePerDay: string;
  availability: string[];
  scheduleId: string;
  scheduleIdName: string;
  yachtTitle: string;
}

const YachtBooking: React.FC<YachtBookingProps> = ({ 
  pricePerHour, 
  // pricePerDay, 
  availability, 
  scheduleId,
  scheduleIdName,
  yachtTitle 
}) => {
  const navigate = useNavigate();

  const handleInquire = () => {
    // Navigate to contact form with yacht info pre-filled
    navigate('/', { state: { selectedYacht: yachtTitle } });
  };

  return (
    <div className={styles.bookingCard} id='booking-section'>
      <h3>Book This Yacht</h3>
      <div className={styles.priceDisplay}>
        <span className={styles.priceAmount}>{pricePerHour}</span>
        <span className={styles.priceUnit}>per hour</span>
        {/* <span className={styles.priceAmount}>{pricePerDay}</span>
        <span className={styles.priceUnit}>per day</span> */}
      </div>
      
      <div className={styles.availabilitySection}>
        <h4>Optional Add On</h4>
        <ul className={styles.availabilityList}>
          {availability.map((item, index) => (
            <li key={index} className={styles.availabilityItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.buttonGroup}>
        <SuperSaaSWidget
              accountId="596774"
              scheduleId={scheduleId} //792957
              scheduleName={scheduleIdName}
              options={{
                finish_time: "hide",
                custom_css: `
                .cb5 {
                margin: 0.2em 0.2em 0em;
                padding-bottom: 0;
                }

                #monthnav .month table tbody tr:first-child td {
                  padding-top: 0;
                }

                #monthnav .month table tbody td a {
                  padding: 0.6rem 0.4rem;
                }

                #monthnav {
                  margin: 0.5em 0;
                }

                .sch tr.nr td.hd {
                padding: 1em 1em 1em !important;
                }
                `
              }}
              buttonText="Book now"
            />
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
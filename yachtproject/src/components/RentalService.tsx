import React from 'react';
import styles from './RentalService.module.css';

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

const RentalService: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: 'Boat Charters',
      description: 'Experience luxury yacht charters for any occasion with professional crew and premium amenities.',
      icon: '⛵'
    },
    {
      title: 'Birthday Parties',
      description: 'Celebrate your special day on the water with unforgettable birthday party packages.',
      icon: '🎂'
    },
    {
      title: 'Bachelor Parties',
      description: 'Create lasting memories with exclusive bachelor party experiences on our luxury yachts.',
      icon: '🥂'
    },
    {
      title: 'Fireworks',
      description: 'Enjoy spectacular fireworks displays from the best seats on the water during special events.',
      icon: '🎆'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.cardContent}>
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentalService;
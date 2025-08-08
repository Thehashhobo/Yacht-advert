import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RentalCards.module.css';
import m1 from '../assets/m/6.webp';
import m2 from '../assets/m/1.webp';
import m3 from '../assets/m/2.webp';
import m4 from '../assets/m/3.webp';
import m5 from '../assets/m/4.webp';
import m6 from '../assets/m/5.webp';
import y1 from '../assets/b/5.webp';
import y2 from '../assets/b/1.webp';
import y3 from '../assets/b/2.webp';
import y4 from '../assets/b/3.webp';
import y5 from '../assets/b/4.webp';

// Interface for yacht data
interface YachtCardData {
  id: string;
  title: string;
  description: string;
  price: string;
  location: string;
  images: string[];
  features: string[];
  pricePerDay: string;
}

const RentalCards: React.FC = () => {
  const navigate = useNavigate();
  const [carouselIndexes, setCarouselIndexes] = useState<{ [key: string]: number }>({});

  // Yacht data using imported images
  const yachtData: YachtCardData[] = [
    {
      id: 'yalla-habibi',
      title: 'Yalla Habibi',
      description: '46 ft: 12 guests',
      price: '$350 per hour',
      location: 'Miami Marina',
      images: [y1, y2, y3, y4, y5],
      features: ['2 bedrooms, 1 bathroom', 'Captain Included', '$350 per hour'],
      pricePerDay: '$350 per hour'
    },
    {
      id: 'meridian-441',
      title: 'Meridian 441',
      description: '48 ft: 15 guests',
      price: '$500 per hour',
      location: 'Newport Harbor',
      images: [m1, m2, m3, m4, m5, m6],
      features: ['2 bedrooms, 2 bathroom', 'Captain Included', '$500 per hour'],
      pricePerDay: '$500 per hour'
    }
  ];

  const handleCarouselNavigation = (yachtId: string, direction: 'prev' | 'next', totalImages: number) => {
    setCarouselIndexes(prev => {
      const currentIndex = prev[yachtId] || 0;
      let newIndex;
      
      if (direction === 'next') {
        newIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;
      } else {
        newIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
      }
      
      return { ...prev, [yachtId]: newIndex };
    });
  };

  const handleIndicatorClick = (yachtId: string, index: number) => {
    setCarouselIndexes(prev => ({ ...prev, [yachtId]: index }));
  };

  const handleCardClick = (yachtId: string) => {
    navigate(`/yacht/${yachtId}`);
  };

  return (
    <div className={styles.flexContainer}>
      {yachtData.map((yacht) => {
        const currentImageIndex = carouselIndexes[yacht.id] || 0;
        
        return (
          <div key={yacht.id} className={styles.flexItem}>
            <div className={styles.customHoverCard}>
              {/* Image Carousel */}
              <div className={styles.cardImageCarousel}>
                <div 
                  className={styles.carouselContainer}
                  style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                  {yacht.images.map((image, index) => (
                    <div key={index} className={styles.carouselSlide}>
                      <img src={image} alt={`${yacht.title} - Image ${index + 1}`} />
                    </div>
                  ))}
                </div>
                
                {/* Carousel Navigation Buttons */}
                <button
                  className={`${styles.carouselButton} ${styles.prev}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCarouselNavigation(yacht.id, 'prev', yacht.images.length);
                  }}
                  aria-label="Previous image"
                >
                  &#8249;
                </button>
                <button
                  className={`${styles.carouselButton} ${styles.next}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCarouselNavigation(yacht.id, 'next', yacht.images.length);
                  }}
                  aria-label="Next image"
                >
                  &#8250;
                </button>
                
                {/* Carousel Indicators */}
                <div className={styles.carouselIndicators}>
                  {yacht.images.map((_, index) => (
                    <div
                      key={index}
                      className={`${styles.carouselIndicator} ${
                        index === currentImageIndex ? styles.active : ''
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleIndicatorClick(yacht.id, index);
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Card Content */}
              <div className={styles.cardContent}>
                <div className={styles.cardInfo}>
                  <h3>{yacht.title}</h3>
                  <p className={styles.description}>{yacht.description}</p>
                  <p className={styles.location}>📍 {yacht.location}</p>
                  <div className={styles.specifications}>
                    {yacht.features.map((feature, index) => (
                      <span key={index}>{feature}</span>
                    ))}
                    {/* <div className={styles.price}>{yacht.price}</div> */}
                    <button
                    className={styles.viewDetailsButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(yacht.id);
                    }}
                  >
                    View Details
                  </button>
                  </div>
                </div>
                
                <div className={styles.cardActions}>
                  

                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RentalCards;

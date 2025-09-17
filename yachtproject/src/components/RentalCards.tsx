import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RentalCards.module.css';
import { yachtsData } from '../data/yachtsData';

const RentalCards: React.FC = () => {
  const navigate = useNavigate();
  const [carouselIndexes, setCarouselIndexes] = useState<{ [key: string]: number }>({});

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
    <div className={styles.flexContainer} 
    id='rentalCardRoot'>
      {yachtsData.map((yacht) => {
        const currentImageIndex = carouselIndexes[yacht.id] || 0;
        
        return (
          <div key={yacht.id} className={styles.flexItem}>
            <div 
              className={styles.customHoverCard}
              style={{ cursor: 'pointer' }}
            >
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
                  {/* <p className={styles.description}>{yacht.description}</p> */}
                  <p className={styles.location}>📍 {yacht.location}</p>
                  
                  {/* Display key features */}
                  <div className={styles.specifications}>
                    {yacht.cardFeatures.slice(0, 3).map((feature, index) => (
                      <span key={index}>{feature}</span>
                    ))}
                  </div>
                  
                  {/* Price display */}
                  <div className={styles.priceSection}>
                    <span className={styles.price}>{yacht.pricePerHour}</span>
                  </div>
                </div>
                
                <div className={styles.cardActions}>
                  <button
                    className={styles.viewDetailsButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(yacht.link);
                    }}
                  >
                    View Details
                  </button>
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

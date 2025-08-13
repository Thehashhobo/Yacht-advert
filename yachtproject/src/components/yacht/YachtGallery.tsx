import React, { useState } from 'react';
import styles from './YachtGallery.module.css';

interface YachtGalleryProps {
  images: string[];
  title: string;
}

const YachtGallery: React.FC<YachtGalleryProps> = ({ images, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={styles.gallerySection}>
      <div className={styles.mainImageContainer}>
        <img 
          src={images[currentImageIndex]} 
          alt={`${title} - Image ${currentImageIndex + 1}`}
          className={styles.mainImage}
        />
        <button 
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={prevImage}
          aria-label="Previous image"
        >
          ‹
        </button>
        <button 
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={nextImage}
          aria-label="Next image"
        >
          ›
        </button>
      </div>
      
      <div className={styles.thumbnailContainer}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} thumbnail ${index + 1}`}
            className={`${styles.thumbnail} ${
              index === currentImageIndex ? styles.activeThumbnail : ''
            }`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default YachtGallery;
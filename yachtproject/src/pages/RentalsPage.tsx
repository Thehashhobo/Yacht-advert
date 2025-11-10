import React, { useRef, useState } from 'react';
import styles from './Rental.module.css';
import '../styles/typography.css';
import RentalCard from '../components/RentalCards';
// import CaptainsSection from '../components/CaptainsSection';
import ReviewsSection from '../components/ReviewsSection';
import CTASection from '../components/CTASection';
import r1 from '../assets/rental/R1.webp';
import r2 from '../assets/rental/G7.webp';
import m2 from '../assets/contact.webp';
// Add gallery images
import g1 from '../assets/rental/G1.webp';
import g2 from '../assets/rental/G2.webp';
import g3 from '../assets/rental/G3.webp';
import g4 from '../assets/rental/G4.webp';
import g5 from '../assets/rental/G5.webp';
import g6 from '../assets/rental/G6.webp';
import g7 from '../assets/rental/G7.webp';
import g8 from '../assets/rental/G8.webp';
import g9 from '../assets/rental/G9.webp';
import g10 from '../assets/rental/G10.webp';
import g11 from '../assets/rental/G11.webp';
import g12 from '../assets/rental/G12.webp';
import g13 from '../assets/rental/G13.webp';
import g14 from '../assets/rental/G14.webp';


const RentalPage: React.FC = () => {
  const packagesRef = useRef<HTMLElement>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const currentImageIndex = 0;

  const handleCharter = () => {
    const bookingSection = document.getElementById('rentalCardRoot');
    if (bookingSection) {
      const elementPosition = bookingSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 110;
      
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 1000;
      let start: number | null = null;

      function step(timestamp: number) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        
        const ease = percentage < 0.5 
          ? 2 * percentage * percentage 
          : -1 + (4 - 2 * percentage) * percentage;
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (progress < duration) {
          requestAnimationFrame(step);
        }
      }
      
      requestAnimationFrame(step);
    }
  };

  const MoveToListings = () => {
    packagesRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImageIndex(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;
    
    if (direction === 'prev') {
      setSelectedImageIndex(selectedImageIndex > 0 ? selectedImageIndex - 1 : galleryImages.length - 1);
    } else {
      setSelectedImageIndex(selectedImageIndex < galleryImages.length - 1 ? selectedImageIndex + 1 : 0);
    }
  };

  const rentalFeatures = [
    { icon: '🚤', title: 'Premium Fleet', desc: 'Modern, well-maintained vessels' },
    { icon: '⚓', title: 'Full Service', desc: 'Captain, crew, and provisions included' },
    { icon: '🌊', title: 'Scenic Routes', desc: 'Explore Vancouver\'s stunning coastline' },
    { icon: '🎉', title: 'Event Ready', desc: 'Perfect for celebrations and gatherings' },
    { icon: '🛡️', title: 'Fully Insured', desc: 'Complete coverage and safety certified' },
    { icon: '🏆', title: '5-Star Service', desc: 'Exceptional customer satisfaction' }
  ];

  // Gallery images array
  const galleryImages = [
    { src: g1, alt: 'Sunset charter experience' },
    { src: g2, alt: 'Guests enjoying yacht deck' },
    { src: g3, alt: 'Vancouver skyline from water' },
    { src: g4, alt: 'Sunset charter experience' },
    { src: g5, alt: 'Guests enjoying yacht deck' },
    { src: g6, alt: 'Vancouver skyline from water' },
    { src: g7, alt: 'Sunset charter experience' },
    { src: g8, alt: 'Guests enjoying yacht deck' },
    { src: g9, alt: 'Vancouver skyline from water' },
    { src: g10, alt: 'Sunset charter experience' },
    { src: g11, alt: 'Guests enjoying yacht deck' },
    { src: g12, alt: 'Vancouver skyline from water' },
    { src: g13, alt: 'Sunset charter experience' },
    { src: g14, alt: 'Guests enjoying yacht deck' },
  ];

  return (
    <div className={styles.rentalPage}>
      {/* Hero Section */}
      <section className={styles.heroSection} style={{ backgroundImage: `url(${r1})` }}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Vancouver Yacht Charters</h1>
            <p>We offer charter experiences for any occasion, from family outings to celebrations. Experience the beauty of British Columbia's coastline aboard our luxury vessels.</p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>150+</span>
                <span className={styles.statLabel}>Successful Charters</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>5★</span>
                <span className={styles.statLabel}>Average Rating</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>3</span>
                <span className={styles.statLabel}>Luxury Vessels</span>
              </div>
            </div>
              <button className={styles.PurchaseButton} onClick={handleCharter}>
              Charter Boats
            </button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <div className={styles.introText}>
              <h2>Luxury Charter Experiences</h2>
              <p>Discover the breathtaking beauty of Vancouver's waters with our premium yacht charter services. Whether you're planning a romantic getaway, corporate event, or family celebration, we provide unforgettable experiences on the water.</p>
              <div className={styles.benefitsList}>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>✓</span>
                  <span>Professional licensed captains</span>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>✓</span>
                  <span>Gourmet catering options available</span>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>✓</span>
                  <span>Flexible itineraries and destinations</span>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>✓</span>
                  <span>All safety equipment included</span>
                </div>
              </div>
            </div>
            <div className={styles.introImage}>
              <img src={r2} alt="Luxury yacht charter experience" />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section ref={packagesRef} className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Charter Packages</h2>
            <p>Choose the perfect package for your adventure</p>
          </div>
            <RentalCard />
        </div>
      </section>

      {/* Charter Gallery Carousel Section */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={styles.galleryContent}>
            <div className={styles.galleryText}>
              <h2>Unforgettable Charter Moments</h2>
              <p>Take a glimpse into the extraordinary experiences our guests enjoy aboard our luxury yachts. From breathtaking sunsets to memorable celebrations, every charter creates lasting memories against Vancouver's stunning coastal backdrop.</p>
            </div>
            
            {/* Single Image Carousel Container */}
            <div className={styles.singleImageCarousel}>
              <div 
                className={styles.mainCarouselImage}
                onClick={() => openImageModal(0)}
              >
                <img 
                  src={galleryImages[currentImageIndex].src} 
                  alt={galleryImages[currentImageIndex].alt} 
                />
                <div className={styles.imageOverlay}>
                  <span className={styles.expandIcon}>🔍</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal Overlay */}
      {selectedImageIndex !== null && (
        <div className={styles.imageModal} onClick={closeImageModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeImageModal}>×</button>
            
            <button 
              className={`${styles.modalNav} ${styles.modalNavLeft}`}
              onClick={() => navigateImage('prev')}
            >
              ←
            </button>
            
            <div className={styles.modalImageContainer}>
              <img 
                src={galleryImages[selectedImageIndex].src} 
                alt={galleryImages[selectedImageIndex].alt}
                className={styles.modalImage}
              />
            </div>
            
            <button 
              className={`${styles.modalNav} ${styles.modalNavRight}`}
              onClick={() => navigateImage('next')}
            >
              →
            </button>
            
            <div className={styles.modalInfo}>
              <span className={styles.modalCounter}>
                {selectedImageIndex + 1} / {galleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Why Choose Our Charter Service</h2>
            <p>Experience the difference with our premium yacht charter offerings</p>
          </div>
          <div className={styles.featuresGrid}>
            {rentalFeatures.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* CTA Section */}
      <CTASection
        title="Ready to Set Sail?"
        subtitle="Book your unforgettable yacht charter experience today and create memories that will last a lifetime."
        buttonText="Book Your Charter"
        backgroundImage={m2}
        onButtonClick={MoveToListings}
      />
    </div>
  );
};

export default RentalPage;
import React from 'react';
import { Button } from 'antd';
import styles from './CTASection.module.css';
import '../styles/typography.css';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  backgroundImage: string;
  onButtonClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  buttonText = "Contact Us Now",
  backgroundImage,
  onButtonClick
}) => {
  return (
    <section className={styles.ctaSection} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.ctaContent}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <Button 
          type="primary" 
          size="large" 
          className={styles.ctaButton}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
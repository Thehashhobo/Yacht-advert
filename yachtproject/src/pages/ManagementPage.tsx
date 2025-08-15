import React, { useState } from 'react';
import styles from './Management.module.css';
import '../styles/typography.css';
import m1 from '../assets/management/m1.webp';
import m2 from '../assets/contact.webp';
import m3 from '../assets/management/m3.webp';
import {Button } from 'antd';
import CTASection from '../components/CTASection';
import FlexModalForm, { FlexModalFormProps } from '../components/FlexModelForm';

const ManagementPage: React.FC = () => {
  
  const standardServices = [
    { icon: '🔧', title: 'Regular Maintenance', desc: 'Comprehensive inspections and upkeep' },
    { icon: '🗺️', title: 'Route Planning', desc: 'Professional navigation scheduling' },
    { icon: '⚡', title: 'System Checks', desc: 'Electrical and plumbing diagnostics' },
    { icon: '🛡️', title: 'Safety Inspections', desc: 'Complete safety equipment reviews' },
    { icon: '👨‍✈️', title: 'Expert Crew', desc: 'Experienced crew members available' }
  ];

  const additionalServices = [
    { icon: '🔨', title: 'Major Repairs', desc: 'Complete overhauls and rebuilds' },
    { icon: '🚢', title: 'Engine Service', desc: 'Engine and generator maintenance' },
    { icon: '⛽', title: 'Fueling Service', desc: 'Professional vessel fueling' },
    { icon: '✨', title: 'Enhancements', desc: 'Vessel upgrades and improvements' },
    { icon: '❄️', title: 'Winterization', desc: 'Seasonal preparation services' },
    { icon: '🤿', title: 'Dive Services', desc: 'Certified underwater maintenance' }
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOpenModal = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);
  const handleSubmit = (values: any) => {
    console.log('Submitted values:', values);
  };

  const fields: FlexModalFormProps['fields'] = [
    { name: 'Name', label: 'Full Name', type: 'text', rules: [{ required: true }] },
    { name: 'Email', label: 'Email Address', type: 'text', rules: [{ required: true }] },
    { name: 'Phone', label: 'Phone Number', type: 'text' },
    { name: 'Model', label: 'Vessel Model & Size', type: 'text' },
    { name: 'Location', label: 'Current Location/Marina', type: 'text' },
    { name: 'Services', label: 'Services Interested In', type: 'text' },
    { name: 'Info', label: 'Additional Details', type: 'textarea', rules: [{ required: true }] },
  ];

  return (
    <div className={styles.managementPage}>
      {/* Hero Section */}
      <section className={styles.heroSection} style={{ backgroundImage: `url(${m1})` }}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Professional Yacht Management</h1>
            <p>Experience worry-free yacht ownership with our comprehensive management program designed for the discerning yacht owner.</p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>200+</span>
                <span className={styles.statLabel}>Vessels Managed</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <div className={styles.introText}>
              <h2>Why Choose Ocean Wave Management?</h2>
              <p>We provide complete yacht care and maintenance, preventing issues and minimizing costly downtime. Our experienced team ensures your vessel remains in pristine condition year-round.</p>
              <div className={styles.benefitsList}>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>✓</span>
                  <span>Proactive maintenance scheduling</span>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>✓</span>
                  <span>Licensed and insured professionals</span>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>✓</span>
                  <span>Transparent reporting and communication</span>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>✓</span>
                  <span>Emergency response available</span>
                </div>
              </div>
            </div>
            <div className={styles.introImage}>
              <img src={m3} alt="Professional yacht management" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Our Management Services</h2>
            <p>Comprehensive care packages designed to keep your yacht in perfect condition</p>
          </div>

          {/* Standard Services */}
          <div className={styles.servicePackage}>
            <div className={styles.packageHeader}>
              <h3>Standard Service Package</h3>
              <p>Essential maintenance and care for optimal performance</p>
            </div>
            <div className={styles.servicesGrid}>
              {standardServices.map((service, index) => (
                <div key={index} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Services */}
          <div className={styles.servicePackage}>
            <div className={styles.packageHeader}>
              <h3>Premium Service Add-ons</h3>
              <p>Advanced services for comprehensive yacht care</p>
            </div>
            <div className={styles.servicesGrid}>
              {additionalServices.map((service, index) => (
                <div key={index} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Confidence Section */}
      <section className={styles.confidenceSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.confidenceContent}>
          <h2>Set Sail with Complete Confidence</h2>
          <p>Experience worry-free yachting with our all-inclusive yacht management and crewing services. Focus on enjoying the water while we handle everything else.</p>
          <div className={styles.confidenceFeatures}>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>🛡️</span>
              <span>Fully Insured Operations</span>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>📞</span>
              <span>24/7 Emergency Support</span>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>📋</span>
              <span>Detailed Reporting</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Maximize Your Yachting Experience?"
        subtitle="Minimize the hassles and maximize the pleasure of your yachting adventures with our professional management services."
        buttonText="Get Your Free Consultation"
        backgroundImage={m2}
        onButtonClick={handleOpenModal}
      />

      <FlexModalForm
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        fields={fields}
        title="Management Services Inquiry"
      />
    </div>
  );
};

export default ManagementPage;
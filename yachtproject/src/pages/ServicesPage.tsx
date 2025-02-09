import React, { useState } from 'react';
import styles from './Services.module.css'; // Importing page-specific CSS
import '../styles/typography.css'; // Import global typography styles
import s1 from '../assets/s1_2.webp';
import s2 from '../assets/s2.webp';
import m2 from '../assets/m2.webp';
import { Collapse, Button } from 'antd';
import FlexModalForm, { FlexModalFormProps } from '../components/FlexModelForm';

const ServicesPage: React.FC = () => {
  const collapseContent = (
    <ul style={{ padding: '1rem' }}>
      <li>Marine Electric</li>
      <li>Engines & Generators</li>
      <li>Fiberglass & Gelcoat</li>
      <li>Plumbing System</li>
      <li>General Mechanical</li>
      <li>Vessel Structural Repair</li>
      <li>Interior Renovation</li>
    </ul>
  );

  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOpenModal = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);
  const handleSubmit = (values: any) => {
    console.log('Submitted values:', values);
  };

  const fields: FlexModalFormProps['fields'] = [
    { name: 'Name', label: 'Name', type: 'text', rules: [{ required: true }] },
    { name: 'Email', label: 'Email Address', type: 'text', rules: [{ required: true }] },
    { name: 'Model', label: 'Vessel Model', type: 'text' },
    { name: 'Info', label: 'Tell us more', type: 'text', rules: [{ required: true }] },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className={styles.outerDivR} style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)), url(${s1})` }}>
        <div className={styles.rHero}>
          <h1>Repair Services</h1>
          <h3>We have qualified and trained technicians who provide top-tier repair and maintenance services.</h3>
        </div>
      </div>

      {/* Services Section */}
      <div className={styles.servicesContainer} style={{ backgroundImage: `url(${s2})` }}>
        <div className={styles.servicesOverlay}></div>
        <div className={styles.servicesContent}>
          <h2>All services are conducted by experienced professionals</h2>
          <Collapse 
            className={styles.collapseContainer}
            expandIcon={({ isActive }) => (
              <span style={{ color: 'white', fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}>
                {isActive ? '-' : '>'}
              </span>
            )}
            items={[
              {
                key: '1',
                label: (
                  <span style={{ fontWeight: 'bold', color: 'white', fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}>
                    Repairs We Offer
                  </span>
                ),
                children: collapseContent,
              },
            ]}
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className={styles.ctaContainer} style={{ backgroundImage: `url(${m2})` }}>
        <div className={styles.ctaOverlay}></div>
        <div className={styles.ctaContent}>
          <h2>Minimize The Hassles and Maximize the Pleasure of Your Yachting Adventures</h2>
          <Button type="primary" size="large" onClick={handleOpenModal}>
            Contact Us Now
          </Button>
          <FlexModalForm
            isVisible={isModalVisible}
            onClose={handleCloseModal}
            onSubmit={handleSubmit}
            fields={fields}
            title="Repair Services Inquiry"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

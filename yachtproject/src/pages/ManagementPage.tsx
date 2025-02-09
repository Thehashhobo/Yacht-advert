import React, { useState } from 'react';
import styles from './Management.module.css'; // Importing page-level CSS
import '../styles/typography.css'; // Import global typography styles
import m1 from '../assets/m1.webp';
import m2 from '../assets/m2.webp';
import m3 from '../assets/m3.webp';
import { Collapse, Button } from 'antd';
import FlexModalForm, { FlexModalFormProps } from '../components/FlexModelForm';

const ManagementPage: React.FC = () => {
  
  const collapseContent = (
    <ul style={{ padding: '1rem' }}>
      <li>Regular maintenance and inspections</li>
      <li>Route planning and navigation scheduling</li>
      <li>Electrical and plumbing system checks</li>
      <li>Safety equipment inspections</li>
      <li>Experienced Crew Members</li>
    </ul>
  );

  const collapseContent1 = (
    <ul style={{ padding: '1rem' }}>
      <li>Major repairs and overhauls</li>
      <li>Engine and generator servicing</li>
      <li>Vessel fueling</li>
      <li>Vessel Enhancements</li>
      <li>Seasonal Winterization</li>
      <li>Cost Effective Anode Replacement By Certified Divers</li>
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
      <div className={styles.outerDivM} style={{ backgroundImage: `url(${m1})` }}>
        <div className={styles.heroContent}>
          <h2>All Inclusive Yacht Management Program</h2>
          <p>Experience worry-free yacht ownership with our Comprehensive Yacht Management Program.</p>
        </div>
      </div>

      {/* Service Information */}
      <div className={styles.responsiveContainer}>
        <div className={styles.box}>
          <h3>Experience Professional Yacht Management with Ocean Wave</h3>
          <p>We provide complete yacht care and maintenance, preventing issues and minimizing costly downtime.</p>
        </div>
        <div className={styles.box}>
          <p style={{ marginBottom: '1rem' }}>All services are conducted by experienced professionals</p>
          <Collapse className={styles.collapseContainer}
            items={[
              {
                key: '1',
                label: <span style={{ fontWeight: 'bold' }}>Standard Service Package</span>,
                children: collapseContent,
              },
            ]}
          />
          <Collapse className={styles.collapseContainer}
            items={[
              {
                key: '2',
                label: <span style={{ fontWeight: 'bold' }}>Additional Optional Services</span>,
                children: collapseContent1,
              },
            ]}
          />
        </div>
      </div>

      {/* Second Hero Section */}
      <div className={styles.outerDivM2} style={{ backgroundImage: `url(${m3})` }}>
        <div className={styles.heroContent}>
          <h2>Set Sail with Confidence</h2>
          <p>Experience worry-free yachting with our all-inclusive yacht crewing service.</p>
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
            title="Management Services Inquiry"
          />
        </div>
      </div>
    </div>
  );
};

export default ManagementPage;

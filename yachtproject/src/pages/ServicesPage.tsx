import React, { useState } from 'react';
import styles from './Services.module.css';
import '../styles/typography.css';
import s1 from '../assets/service/s1.webp';
import s2 from '../assets/service/S2.webp';
import m2 from '../assets/contact.webp';
import CTASection from '../components/CTASection';
import FlexModalForm, { FlexModalFormProps } from '../components/FlexModelForm';

const ServicesPage: React.FC = () => {
  const serviceItems = [
    { icon: '⚡', title: 'Marine Electric', desc: 'Complete electrical system diagnosis and repair' },
    { icon: '🔧', title: 'Engines & Generators', desc: 'Engine maintenance and generator services' },
    { icon: '🛠️', title: 'Fiberglass & Gelcoat', desc: 'Hull repair and cosmetic restoration' },
    { icon: '🚿', title: 'Plumbing System', desc: 'Water system maintenance and repairs' },
    { icon: '⚙️', title: 'General Mechanical', desc: 'Comprehensive mechanical services' },
    { icon: '🔨', title: 'Vessel Structural Repair', desc: 'Structural integrity and safety repairs' },
    { icon: '🏠', title: 'Interior Renovation', desc: 'Cabin upgrades and interior improvements' }
  ];

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
    <div className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.heroSection} style={{ backgroundImage: `url(${s1})` }}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Repair Services</h1>
            <p>We have qualified and trained technicians who provide top-tier repair and maintenance services.</p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statIcon}>✓</span>
                <span className={styles.statLabel}>Certified Technicians</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statIcon}>✓</span>
                <span className={styles.statLabel}>Quality Guarantee</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statIcon}>✓</span>
                <span className={styles.statLabel}>Fast Service</span>
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
              <h2>Professional Yacht Services</h2>
              <p>All services are conducted by experienced professionals with years of maritime expertise. We ensure your vessel receives the highest quality care and attention to detail.</p>
              <div className={styles.benefitsList}>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>✓</span>
                  <span>Experienced marine technicians</span>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>✓</span>
                  <span>Quality parts and materials</span>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>✓</span>
                  <span>Warranty on all repairs</span>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>✓</span>
                  <span>Emergency service available</span>
                </div>
              </div>
            </div>
            <div className={styles.introImage}>
              <img src={s2} alt="Professional yacht services" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Our Repair Services</h2>
            <p>Comprehensive repair and maintenance solutions for all types of vessels</p>
          </div>
          
          <div className={styles.servicePackage}>
            <div className={styles.packageHeader}>
              <h3>Complete Service Portfolio</h3>
              <p>From routine maintenance to major repairs - we handle it all</p>
            </div>
            <div className={styles.servicesGrid}>
              {serviceItems.map((service, index) => (
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

      {/* CTA Section */}
      <CTASection
        title="Minimize The Hassles and Maximize the Pleasure"
        subtitle="of Your Yachting Adventures"
        buttonText="Contact Us Now"
        backgroundImage={m2}
        onButtonClick={handleOpenModal}
      />
      <FlexModalForm
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        fields={fields}
        title="Repair Services Inquiry"
      />
    </div>
  );
};

export default ServicesPage;
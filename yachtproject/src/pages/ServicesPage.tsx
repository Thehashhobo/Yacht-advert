import React,  { useState } from 'react';
import s1 from '../assets/s1_2.webp';
import s2 from '../assets/s2.webp';
import m2 from '../assets/m2.webp';
import { Collapse, Button } from 'antd';
import FlexModalForm, { FlexModalFormProps } from '../components/FlexModelForm';


const ServicesPage: React.FC = () => {
  const collapseContent = (
    <ul style={{padding:'1rem'}}>
      <li>Marine Electric</li>
      <li>Engines & Generators</li>
      <li>Fiberglass & Gelcoat</li>
      <li>Plumbing System</li>
      <li>General Mechanical</li>
      <li>Vessal Structural Repair</li>
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
  { name: 'Email', label: 'Email Address', type: 'text', rules: [{ required: true }]},
  { name: 'Model', label: 'Vessel Model', type: 'text' },
  { name: 'Info', label: 'Tell us more', type: 'text', rules: [{ required: true }]},
  ];
  return (
    <div>
<div
  className="outer-div-r"
  style={{
    height: '65vh',
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)), url(${s1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="r-hero" style={{ padding: '1.5rem' }}>
    <h1 style={{ color: 'white', marginBottom:'1rem'}}>Repair Services</h1>
    <h3 style={{ color: 'white' }}>We have qualified and trained technicians who have been providing repair and maintenance services for years, able to take on any problem you may have with your boat.</h3>
  </div>
</div>
    <div className='services-container'
      style={{
        position: 'relative',
        backgroundImage: `url(${s2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '55vh', // Adjust height as needed
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Overlay to darken the background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black color
          zIndex: 1,
        }}
      ></div>
      <div style={{zIndex: 3}}>
      <h2 style={{margin:'1.5rem', color: 'white', textWrap: 'balance'}}>All services are conducted by experienced and professionals</h2>
      <Collapse 
    style={{ margin: '1rem' }}
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
    <div
      style={{
        position: 'relative',
        backgroundImage: `url(${m2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '40vh', // Adjust height as needed
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Overlay to darken the background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color
          zIndex: 1,
        }}
      ></div>

      {/* Content (Heading and Button) */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <h2 style={{ color: 'white', margin: '20px'}}>Minimize The Hassles and Maximize the Pleasure of Your Yachting Adventures</h2>
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

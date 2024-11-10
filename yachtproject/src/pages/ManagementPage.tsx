import React from 'react';
import m1 from '../assets/m1.webp';
import m2 from '../assets/m2.webp';
import m3 from '../assets/m3.webp';
import { Collapse, Button } from 'antd';

const ManagementPage: React.FC = () => {
  const collapseContent = (
    <ul style={{padding:'1rem'}}>
      <li>Regular maintenance and inspections</li>
      <li>Major repairs and overhauls</li>
      <li>Engine and generator servicing</li>
      <li>Electrical and plumbing system checks</li>
      <li>Safety equipment inspections</li>
    </ul>
  );
  const collapseContent1 = (
    <ul style={{padding:'1rem'}}>
      <li>Regular maintenance and inspections</li>
      <li>Major repairs and overhauls</li>
      <li>Engine and generator servicing</li>
      <li>Electrical and plumbing system checks</li>
      <li>Safety equipment inspections</li>
    </ul>
  );
return (
  <div>
    <div
      className="outer-div"
      style={{
        backgroundImage: `url(${m1})`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '20px',
          borderRadius: '80px',
        }}
      >
        <h2 style={{ marginTop: '15px'}}>All inclusive Yacht Management Program</h2>
        <p style={{ marginTop: '5px', }}>Experience worry-free yacht ownership with our Comprehensive Yacht Management 
          Program. We handle everything from routine maintenance to major overhauls.</p>
      </div>
    </div>
    <div className="responsive-container">
      <div className="box">
        <h3>Experience Professional Yacht Management with Company name</h3>
        <p>We provide complete yacht care and maintenance, preventing issues and minimizing costly downtime.
           From minor upkeep to major overhauls, our team ensures your vessel meets industry standards. 
           Stay informed with detailed monthly reports and visual updates, enabling smart decisions for your yacht.</p>

      </div>
      <div className="box">
      <p style={{marginBottom:'1rem'}}>All services are conducted by experienced and professional</p>
      <Collapse style={{marginBottom:'1rem'}}
            items={[
              {
                key: '1',
                label: <span style={{ fontWeight: 'bold'}}>Standard Service package</span>, // Make label bold
                children: collapseContent,
              },
            ]}
        />
              <Collapse
            items={[
              {
                key: '1',
                label: <span style={{ fontWeight: 'bold' }}>Additional Optional Services </span>, // Make label bold
                children: collapseContent1,
              },
            ]}
        />
      </div>
    </div>
    <div
      className="outer-div"
      style={{
        backgroundImage: `url(${m3})`,
        height: '600px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '20px',
          borderRadius: '20px',
        }}
      >
        <h2 style={{ margin: '15px'}}>Set Sail with Confidence</h2>
        <p style={{ margin: '5px', }}>Experience the ultimate in worry-free yachting with our all-inclusive yacht crewing service.
           From seasoned captains to skilled deckhands and professional stewards, our experienced crew handles every detail to ensure your journey 
           is seamless and unforgettable.</p>
      </div>
    </div>
    <div
      style={{
        position: 'relative',
        backgroundImage: `url(${m2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '35vh', // Adjust height as needed
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
        <h2 style={{ color: 'white', marginBottom: '20px' }}>Minimize The Hassles and Maximize the Pleasure of Your Yachting Adventures</h2>
        <Button type="primary" size="large">
          Contact Us Now
        </Button>
      </div>
    </div>
  </div>
);
};

export default ManagementPage;

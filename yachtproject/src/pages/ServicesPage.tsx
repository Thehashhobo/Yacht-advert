import React from 'react';
import s1 from '../assets/s1.webp';
import s2 from '../assets/s2.webp';
import m2 from '../assets/m2.webp';
import { Collapse, Button } from 'antd';

const ServicesPage: React.FC = () => {
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
    className="outer-div-r"
    style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)), url(${s1})`,
        backgroundPosition: 'center',
    }}
>
        <div className="r-hero" style={{padding: '2rem'}}>
        <h1 style={{ color: 'white'}}>Boat Repair Services</h1>
        <h3 style={{ color: 'white'}}>We have a qualified and trained technicians who have been providing repair and maintenance services for years,
           able to take on any problem you may have with your boat.</h3>
        </div>
        
    </div>
    <div className='services-container'
      style={{
        position: 'relative',
        backgroundImage: `url(${s2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '38vh', // Adjust height as needed
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
      <h2 style={{margin:'0.7rem', color: 'white'}}>All services are conducted by experienced and professionals</h2>
      <Collapse 
    style={{ margin: '0.7rem' }}
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
<Collapse 
    style={{ margin: '0.7rem' }}
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
                    Pricing
                </span>
            ),
            children: collapseContent1,
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

export default ServicesPage;

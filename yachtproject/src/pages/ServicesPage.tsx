import React from 'react';
import s1 from '../assets/s1.webp';
import s2 from '../assets/s2.webp';
import { Collapse } from 'antd';

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
      className="outer-div"
      style={{
        backgroundImage: `url(${s1})`,
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
        <h2 style={{ marginTop: '15px'}}>Boat Repair Services</h2>
        <p style={{ marginTop: '5px', }}>We have a qualified and trained technicians who have been providing repair and maintenance services for years,
           able to take on any problem you may have with your boat.</p>
      </div>
    </div>
    <div
      style={{
        position: 'relative',
        backgroundImage: `url(${s2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '65vh', // Adjust height as needed
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
      <div style={{zIndex: 3}}>
      <h2 style={{ margin: '5px', color:'white'}}>Boat Repair Services</h2>
        <p style={{ margin: '5px', color:'white'}}>We have a qualified and trained technicians who have been providing repair and maintenance services for years! 
           We are able to take on any problem you may have with your boat.</p>
      

      <p style={{marginBottom:'1rem', color: 'white'}}>All services are conducted by experienced and professional</p>
      <Collapse style={{marginBottom:'1rem'}}
            items={[
              {
                key: '1',
                label: <span style={{ fontWeight: 'bold', color: 'white'}}>Standard Service package</span>, // Make label bold
                children: collapseContent,
              },
            ]}
        />
              <Collapse
            items={[
              {
                key: '1',
                label: <span style={{ fontWeight: 'bold', color: 'white'}}>Additional Optional Services </span>, // Make label bold
                children: collapseContent1,
              },
            ]}
        />
      </div>

    </div>
    
    </div>
  );
};

export default ServicesPage;

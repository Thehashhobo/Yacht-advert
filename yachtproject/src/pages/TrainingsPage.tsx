import React from 'react';
import t1 from '../assets/t1.webp';
import s2 from '../assets/s2.webp';
import t2 from '../assets/t2.webp';
import m2 from '../assets/m2.webp';
import { Collapse, Button } from 'antd';

const TrainingsPage: React.FC = () => {
  return (
    <div>
<div
    className="outer-div-train"
    style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)), url(${t1})`,
        backgroundPosition: 'center',
    }}
>
    <div className="r-hero" style={{padding: '2rem'}}>
        <h1 style={{ color: 'white'}}>BC Boating License</h1>
        <h3 style={{ color: 'white'}}>The Official Transport Canada Approved Boating Safety Course to obtain your Pleasure Craft Operator Card.</h3>
    </div>
</div>
<div className='training-container'
  style={{
    position: 'relative',
    backgroundImage: `url(${s2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
    <div style={{ zIndex: 3, textAlign: 'center' }}>
        <h2 style={{ marginBottom: '0.7rem',marginTop: '0.7rem', color: 'white' }}>Do I Need a Boating License in BC?</h2>
        <p style={{ color: 'white', margin: '0.7rem' }}>
        Motorized boat operators of all ages in British Columbia are required to obtain and carry a BC Boating License 
        (officially known as a Pleasure Craft Operator Card or PCOC). If you’re operating a motorized boat in British Columbia, 
        you can obtain your BC boat license by completing the Transport Canada Approved BOATsmart! Course. Driving a motorized boat 
        in British Columbia without your Pleasure Craft Operator Card on board will result in a fine of $250.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        <img src={t2} alt="Training Image" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        <Button type="primary" size="large">
            Contact Us Now
        </Button>
        </div>
    </div>
    </div>
</div>
  );
};

export default TrainingsPage;

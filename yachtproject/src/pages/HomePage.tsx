// src/pages/Home.tsx
import React from 'react';
import '../App.css';
import FlexCardGrid from '../components/FlexCardGrid';
import GeneralForm from '../components/GeneralForm';
import big_img from '../assets/home2.webp';
import background1 from '../assets/b1.webp';
import background2 from '../assets/b3.webp';


const HomePage: React.FC = () => {
  return (
    <>
      <div
        className="outer-div"
        style={{
          backgroundImage: `url(${big_img})`,
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
            whiteSpace: 'nowrap',
            backgroundColor: 'rgba(0, 0, 0, 0.07)',
            padding: '20px',
            borderRadius: '80px',
          }}
        >
          <h1 style={{ marginBottom: '15px' }}>Company Name</h1>
          <h3>YACHT MANAGEMENT, SERVICES</h3>
          <h3>REPAIR AND RENTAL</h3>
          <p style={{ marginTop: '5px' }}>Additional text can go here</p>
        </div>
      </div>

      <div
        className="outer-div"
        style={{
          position: 'relative',
          backgroundColor: 'black',
        }}
      >
        <div
          className="background-layer"
          style={{
            backgroundImage: `url(${background1})`,
            filter: 'brightness(20%)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className="intro-container"
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            justifyContent: 'center',
            height: '100%',
            color: 'white',
            paddingLeft: '2.3rem',
            paddingTop: '1.3rem',
          }}
        >
          <div className="intro-text">
            <h4 style={{ marginBottom: '1.4rem', opacity: 0.75 }}>Company Name</h4>
            <h3>VANCOUVER YACHT MANAGEMENT, SERVICES, REPAIRS AND RENTAL CENTRE</h3>
            <p style={{ marginTop: '0.7rem', paddingBottom: '2rem', opacity: 0.75 }}>
              Trusted and established Yacht service provider
            </p>
          </div>
          <FlexCardGrid />
        </div>
      </div>

      <div
        className="form-container"
        style={{
          backgroundImage: `url(${background2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '2rem',
          position: 'relative',
        }}
      >
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '2rem', borderRadius: '10px' }}>
          <h2 className="intouch" style={{ justifySelf: 'center', color: 'white' }}>
            Get in Touch!
          </h2>
          <GeneralForm />
        </div>
      </div>

    </>
  );
};

export default HomePage;

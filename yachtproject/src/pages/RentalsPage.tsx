
// src/pages/Home.tsx
import React from 'react';
import '../App.css';
import RentalCard from '../components/RentalCards';
import r1 from '../assets/r1.webp';
import background1 from '../assets/b1.webp';


const RentalPage: React.FC = () => {
  return (
    <>
    <div
        className="outer-div-r"
        style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)), url(${r1})`,
            backgroundPosition: 'center',
        }}
    >

        <div className="r-hero" style={{padding: '2rem'}}>
        <h1 style={{ color: 'white'}}>Yacht Charters Vancouver</h1>
        <h3 style={{ color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</h3>
        </div>

    </div>
    <div
        className="outer-div-r"
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
                          <h1 style={{color: 'white', justifySelf: 'center'}}>Choose an Package</h1>
        <p style={{color: 'white', marginTop:'1rem',marginBottom:'1.5rem' ,justifySelf: 'center'}}>We offer a variety of charter experiences suitable for any occasion, whether it’s a family and friends outing or 
            a birthday or bachelor/bachelorette celebration. Choose from one of our packages listed below or Contact us directly 
            for more information on our yachting packages and services.
        </p>
          <RentalCard/>
        </div>
      </div>
    </>
  );
};

export default RentalPage;

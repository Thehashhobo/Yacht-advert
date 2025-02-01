
import React from 'react';
import '../App.css';
import RentalCard from '../components/RentalCards';
import r1 from '../assets/H2.webp';
import background1 from '../assets/b1.webp';



const RentalPage: React.FC = () => {
  
  return (
    <>
    <div
        className="outer-div-r"
        style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url(${r1})`,
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            height: '65vh',
        }}
    >

        <div className="r-hero" style={{padding: '2rem', paddingTop: '1rem'}}>
        <h1 style={{ color: 'white', marginBottom:'0.5rem', fontFamily: '"Poppins", serif'}}>Vancouver Yacht Charters </h1>
        <h3 style={{ color: 'white'}}>We offer charter experiences for any occasion, from family outings to celebrations.
        Explore our packages below or contact us for more details.</h3>
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
            zIndex: 0,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div
          className="intro-container-r"
          style={{
            position: 'relative',
            zIndex: 2,
            alignItems: 'left',
            justifyContent: 'center',

            color: 'white',
            padding: '0.8rem',
          }}
        >
        <h1 style={{color: 'white', justifySelf: 'center', fontFamily: '"Poppins", serif'}}>Choose a Package</h1>
        <p style={{color: 'white', marginTop:'0.3rem',marginBottom:'-2rem' ,justifySelf: 'center'}}>

        </p>
        <RentalCard/> 
        </div>
       
      </div>
    </>
  );
};

export default RentalPage;

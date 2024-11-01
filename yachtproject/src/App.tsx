import React from 'react';
import './App.css';
import FlexCardGrid from './components/FlexCardGrid';
import GeneralForm from './components/GeneralForm';
import logo from './/assets/react.svg';
import big_img from './/assets/home2.webp';
import background1 from './/assets/b1.webp';
import background2 from './/assets/b3.webp';
import {Layout, Menu} from 'antd';
import { FacebookFilled, TwitterCircleFilled, InstagramFilled, YoutubeFilled } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

const { Header, Footer } = Layout;


const items = [
  { key: '1', label: 'Home' },
  { key: '2', label: 'Yacht Management' },
  { key: '3', label: 'Services and Repair' },
  { key: '4', label: 'Yacht Rentals' },
  { key: '5', label: 'Training' },
  { key: '5', label: 'Contact' },
  // Additional items as needed
];

const App: React.FC = () => {

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center',position: 'sticky', top: 0, overflow: 'hidden',zIndex:3}}>
        <div className="demo-logo" />
        <img src={logo} alt="logo" style={{ height: '32px', marginLeft: '10px' }} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0, marginLeft: '10px', display: 'flex', justifyContent: 'right' }} 
        />
      </Header>
      <div
      className="outer-div"
      style={{
        backgroundImage: `url(${big_img})`,
      }}>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              textAlign: 'center',
              whiteSpace: 'nowrap', // Prevent text from wrapping
              backgroundColor: 'rgba(0, 0, 0, 0.07)', // Add a semi-transparent dark background
              padding: '20px', // Add some padding for better readability
              borderRadius: '80px', // Optional: Add rounded corners
            }}
          >
            <h1 style={{marginBottom :'15px'}}>Company Name</h1>
            <h3>YACHT MANAGEMENT, SERVICES </h3>
            <h3>RAPAIR AND RENTAL </h3>
            <p style={{marginTop :'5px'}}>Additional text can go here</p>
          </div>
      </div>
      <div
        className="outer-div"
        style={{
          position: 'relative',  // Make this element the parent for absolute positioning of children
          backgroundColor: 'black',
        }}
      >
        <div
          className="background-layer"
          style={{
            backgroundImage: `url(${background1})`,
            filter: 'brightness(20%)',  // Apply a brightness filter to darken the image
            position: 'absolute',  // Make this layer cover the entire parent div
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,  // Place this behind the content
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className="intro-container"
          style={{
            position: 'relative',  // Keep the text above the background
            zIndex: 2,  // Place this above the background layer
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            justifyContent: 'center',
            height: '100%',  // Fill the height of the outer div
            color: 'white',
            paddingLeft: '2.3rem', 
            paddingTop: '1.3rem', 
          }}
        >
          <div className="intro-text">
            <h4 style={{marginBottom: '1.4rem', opacity: 0.75}}>Company Name</h4>
            <h3>VANCOUVER YACHT MANAGEMENT, SERVICES, RAPAIRS AND RENTAL CENTRE </h3>
            <p style={{marginTop: '0.7rem', paddingBottom: '2rem', opacity: 0.75}}>Trusted and established Yacht service provider</p>
          </div>
          <FlexCardGrid/>
        </div>
      </div>
      <div className="form-container"
        style={{ backgroundImage: `url(${background2})`, backgroundSize: 'cover',
        backgroundPosition: 'center', padding: '2rem', position: 'relative'}}
      >
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '2rem', borderRadius: '10px' }}>
          <h2 className='intouch' style={{justifySelf:'center', color: 'white'}}>Get in Touch !</h2>
          <GeneralForm/>
        </div>
      </div>
      <div className="footer-section">
  <div className="footer-links">
    <h3>Links</h3>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Artists</a></li>
      <li><a href="#">Schedule</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>

  <div className="footer-social">
    <h3>Follow Us</h3>
    <div className="social-icons">
      <a href="#" target="_blank"><FacebookFilled style={{ fontSize: '24px', color: '#fff' }} /></a>
      <a href="#" target="_blank"><TwitterCircleFilled style={{ fontSize: '24px', color: '#fff' }} /></a>
      <a href="#" target="_blank"><InstagramFilled style={{ fontSize: '24px', color: '#fff' }} /></a>
      <a href="#" target="_blank"><YoutubeFilled style={{ fontSize: '24px', color: '#fff' }} /></a>
    </div>
  </div>

  <div className="footer-info">
    <h3>General Inquiries</h3>
    <p><strong>Location:</strong> Vancvour british colombia, Canada, address</p>
    <p><strong>Hours:</strong> Mon - Fri: 9 AM - 6 PM</p>
    <p><strong>Phone:</strong> 090-080-0760</p>
    <p><strong>Email:</strong> <a href="mailto:hello@company.com">hello@company.com</a></p>
  </div>
</div>


      <Footer style={{ textAlign: 'center' }}>
        Designed by JerryW ©{new Date().getFullYear()} Powered by Ant Design
      </Footer>
    </Layout>
  );
};

export default App;
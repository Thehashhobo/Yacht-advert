import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ManagementPage from './pages/ManagementPage';
import ServicesPage from './pages/ServicesPage';
// import RentalsPage from './pages/RentalsPage';
import {Layout} from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FacebookFilled, TwitterCircleFilled, InstagramFilled, YoutubeFilled } from '@ant-design/icons';

const { Footer } = Layout;



const App: React.FC = () => {

  return (
    <Router>
      <Layout>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/management" element={<ManagementPage />} />
          <Route path="/services" element={<ServicesPage />} />
          {/* <Route path="/services" element={<RentalsPage />} /> */}
        </Routes>
        <div className="footer-section">
        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Management</a></li>
            <li><a href="#">Service and Repair</a></li>
            <li><a href="#">Rentals</a></li>
            <li><a href="#">Training</a></li>
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
          <p><strong>Location:</strong> Vancouver, British Columbia, Canada, address</p>
          <p><strong>Hours:</strong> Mon - Fri: 9 AM - 6 PM</p>
          <p><strong>Phone:</strong> 090-080-0760</p>
          <p><strong>Email:</strong> <a href="mailto:hello@company.com">hello@company.com</a></p>
        </div>
      </div>
        <Footer style={{ textAlign: 'center' }}>
          Designed by JerryW ©{new Date().getFullYear()} Powered by Ant Design
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
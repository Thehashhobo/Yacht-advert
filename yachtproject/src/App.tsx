import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ManagementPage from './pages/ManagementPage';
import ServicesPage from './pages/ServicesPage';
// import RentalsPage from './pages/RentalsPage';
import {Layout} from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
        <Footer style={{ textAlign: 'center' }}>
          Designed by JerryW ©{new Date().getFullYear()} Powered by Ant Design
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
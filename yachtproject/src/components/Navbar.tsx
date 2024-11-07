import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import logo from '../assets/react.svg';

const { Header } = Layout;

const Navbar: React.FC = () => {
  const location = useLocation();

  // Determine the active menu item based on the current location path
  const getSelectedKey = () => {
    switch (location.pathname) {
      case '/management':
        return '2';
      case '/services':
        return '3';
      case '/rentals':
        return '4';
      case '/trainings':
        return '5';
      case '/':
      default:
        return '1';
    }
  };

  // Define the menu items with `Link` for navigation
  const items = [
    { key: '1', label: <Link to="/">Home</Link> },
    { key: '2', label: <Link to="/management">Yacht Management</Link> },
    { key: '3', label: <Link to="/services">Services and Repair</Link> },
    { key: '4', label: <Link to="/rentals">Yacht Rentals</Link> },
    { key: '5', label: <Link to="/trainings">Training</Link> },
  ];

  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        overflow: 'hidden',
        zIndex: 5 ,
      }}
    >
      <div className="demo-logo" />
      <img src={logo} alt="logo" style={{ height: '32px', marginLeft: '10px' }} />
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[getSelectedKey()]} // Track the active page
        items={items}
        style={{
          flex: 1,
          minWidth: 0,
          marginLeft: '10px',
          display: 'flex',
          justifyContent: 'right',
        }}
      />
    </Header>
  );
};

export default Navbar;

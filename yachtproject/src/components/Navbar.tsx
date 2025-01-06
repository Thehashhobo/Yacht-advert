import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Layout, Menu, Dropdown, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import logo from '../assets/logo.png';

const { Header } = Layout;

const Navbar: React.FC = () => {
  const location = useLocation();

  // Determine if the viewport is small
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  // Determine the active menu item based on the current location path
  const getSelectedKey = () => {
    switch (location.pathname) {
      case '/management':
        return '2';
      case '/services':
        return '3';
      case '/rentals':
        return '4';
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
  ];

  // Dropdown menu for small screens
  const dropdownMenu = (
    <Menu items={items.map(item => ({ key: item.key, label: item.label }))} />
  );

  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        overflow: 'hidden',
        zIndex: 5,
        padding: '25px',
      }}
    >
      <div className="demo-logo" />
      <img src={logo} alt="logo" style={{ height: '50px', marginLeft: '5px', marginTop: '10px' }} />
      <h3
        style={{
          fontFamily: '"Poppins", serif',
          fontSize: '1.7rem',
          color: '#5EBFEB',
          marginLeft: '10px',
          whiteSpace: 'nowrap',
        }}
      >
        Ocean Wave
      </h3>

      {isSmallScreen ? (
        <Dropdown overlay={dropdownMenu} trigger={['click']} placement="bottomRight">
          <Button
            icon={<MenuOutlined style={{ fontSize: '26px' }} />} // Adjust the icon size
            shape="circle"
            style={{
              marginLeft: 'auto',
              width: '60px', // Set a fixed width
              height: '60px', // Set a fixed height
              fontSize: '24px', // Increase the font size of the icon
              backgroundColor: '#001529', // Background color
              color: '#fff', // Icon color
              border: 'none', // Remove the border
              display: 'flex', // Center the icon inside
              alignItems: 'center', // Center vertically
              justifyContent: 'center', // Center horizontally
            }}
          />
        </Dropdown>
      ) : (
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[getSelectedKey()]} // Only highlight active page on larger screens
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            marginLeft: '10px',
            display: 'flex',
            justifyContent: 'right',
          }}
        />
      )}
    </Header>
  );
};

export default Navbar;

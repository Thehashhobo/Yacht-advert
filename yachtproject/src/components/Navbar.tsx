import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import logo from '../assets/logo3.png';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Define the left menu items
  const leftItems = [
    { key: '1', label: 'Home', path: '/' },
    { key: '2', label: 'Yacht Management', path: '/management' },
  ];

  // Define the right menu items
  const rightItems = [
    { key: '3', label: 'Services and Repair', path: '/services' },
    { key: '4', label: 'Yacht Rentals', path: '/rentals' },
  ];

  // All items for mobile dropdown
  const allItems = [...leftItems, ...rightItems];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      {isSmallScreen ? (
        <>
          <div className={styles.mobileHeader}>
            <div className={styles.logoContainer}>
              <img src={logo} alt="logo" className={styles.logoMobile} />
            </div>
            <button 
              className={styles.mobileMenuButton}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span className={styles.hamburger}></span>
              <span className={styles.hamburger}></span>
              <span className={styles.hamburger}></span>
            </button>
          </div>
          
          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className={styles.mobileMenuDropdown}>
              <nav className={styles.mobileNav}>
                {allItems.map((item) => (
                  <Link
                    key={item.key}
                    to={item.path}
                    className={`${styles.mobileNavLink} ${
                      getSelectedKey() === item.key ? styles.active : ''
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </>
      ) : (
        <>
          {/* Left Menu */}
          <nav className={styles.leftNav}>
            {leftItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`${styles.navLink} ${
                  getSelectedKey() === item.key ? styles.active : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Center Logo */}
          <div className={styles.logoContainer}>
            <img src={logo} alt="logo" className={styles.logo} />
          </div>
          
          {/* Right Menu */}
          <nav className={styles.rightNav}>
            {rightItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`${styles.navLink} ${
                  getSelectedKey() === item.key ? styles.active : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </>
      )}
    </header>
  );
};

export default Navbar;

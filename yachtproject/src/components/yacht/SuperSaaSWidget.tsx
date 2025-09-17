import React, { useEffect, useRef } from 'react';
import styles from './SuperSaaSWidget.module.css';

interface SuperSaaSWidgetProps {
  accountId: string;
  scheduleId: string;
  scheduleName: string;
  options?: {
    finish_time?: 'show' | 'hide';
    custom_css?: string; // Add custom CSS option
    [key: string]: any;
  };
  buttonText?: string;
  buttonStyle?: React.CSSProperties;
  className?: string;
}

const SuperSaaSWidget: React.FC<SuperSaaSWidgetProps> = ({
  accountId,
  scheduleId,
  scheduleName,
  options = {},
  buttonText = "Book now",
  className = ''
}) => {
  const supersaasInstanceRef = useRef<any>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    const loadWidget = () => {
      // Default options with custom CSS support
      const defaultOptions = {
        finish_time: 'hide',
        ...options
      };

      // Check if SuperSaaS is available
      if (window.SuperSaaS) {
        const instanceName = `supersaas_${scheduleId}`;
        
        // Create the SuperSaaS instance
        const supersaasInstance = new window.SuperSaaS(
          `${accountId}:${scheduleName}`,
          `${scheduleId}:${scheduleName}`,
          defaultOptions
        );
        
        supersaasInstanceRef.current = supersaasInstance;
        
        // Store the instance globally for the button onclick
        (window as any)[instanceName] = supersaasInstance;
      } else {
        console.error('SuperSaaS library not loaded');
      }
    };

    const loadScript = () => {
      if (scriptLoadedRef.current || document.querySelector('script[src="https://cdn.supersaas.net/widget.js"]')) {
        loadWidget();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.supersaas.net/widget.js';
      script.async = true;
      script.onload = () => {
        scriptLoadedRef.current = true;
        loadWidget();
      };
      script.onerror = () => {
        console.error('Failed to load SuperSaaS widget script');
      };

      document.head.appendChild(script);
    };

    loadScript();

    // Cleanup function
    return () => {
      const instanceName = `supersaas_${scheduleId}`;
      if ((window as any)[instanceName]) {
        delete (window as any)[instanceName];
      }
    };
  }, [accountId, scheduleId, scheduleName, options]);

  const handleButtonClick = () => {
    if (supersaasInstanceRef.current && supersaasInstanceRef.current.show) {
      supersaasInstanceRef.current.show();
    } else {
      console.error('SuperSaaS instance not ready');
    }
  };

  return (
    <div className={`${styles.supersaasContainer} ${className}`}>
      <button
        onClick={handleButtonClick}
        className={styles.bookNowButton}
      >
        {buttonText}
      </button>
    </div>
  );
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    SuperSaaS: any;
  }
}

export default SuperSaaSWidget;
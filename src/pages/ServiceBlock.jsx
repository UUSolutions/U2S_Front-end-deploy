
import React, { useState } from 'react';
import styles from '../assets/styles/Services.module.css'; // Make sure the path is correct

const ServiceBlock = ({ className, icon, title, children }) => {
  // 1. Adding state to track if the content is collapsed
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Helper function to toggle the state
  const toggleContent = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    // Combine the base card style with the specific one (e.g., ServMarketBlock)
    <div className={`${styles.serviceCard} ${className}`}>
      {icon}
      <h2 className={styles.servHeader}>{title}</h2>

      {/* 2. Apply the dynamic class to the content wrapper */}
      <div
        className={`
          ${styles.serviceContent}
          ${isCollapsed ? styles.collapsed : styles.expanded}
        `}
      >
        {children}
      </div>

      {/* 3. Add a button to trigger the state change */}
      <button onClick={toggleContent} className={styles.readMoreBtn}>
        {isCollapsed ? 'Read More' : 'Read Less'}
      </button>
    </div>
  );
};

export default ServiceBlock;
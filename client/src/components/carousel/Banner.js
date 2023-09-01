import React from 'react';
import './VideoBanner.css'; // Create this CSS file for styling
import viedo from './banner.mp4'
const VideoBanner = () => {
  return (
    <div className="video-banner">
      <video autoPlay loop muted>
        <source src={viedo} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1 style={{fontFamily:'math'}}>Harmony Store</h1>
        <p style={{fontFamily:'inherit'}}>Tendances en Bijoux && Accessoires</p>
      </div>
    </div>
  );
};

export default VideoBanner;

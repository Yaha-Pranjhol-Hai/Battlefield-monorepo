import React from 'react';
import './MapComponent.css'; // Import the CSS for styling
const MapComponent = ({ imageSrc, title }) => {
  // Split the title into two parts for first and second lines
  const titleParts = title.split(' ');
  const mapTitle = titleParts.slice(0, 2).join(' ');  // "CONQUEST LARGE"
  const mapName = titleParts.slice(2).join(' ');  // "DAWNBREAKER" (or whatever follows)

  return (
    <div className="map-component">
      <div className="map-image-container">
        <img className="map-image" src={imageSrc} alt={title} />
      </div>
      <div className="map-title">
        <span>{mapTitle}</span>
        <span>{mapName}</span>
      </div>
    </div>
  );
};


export default MapComponent;

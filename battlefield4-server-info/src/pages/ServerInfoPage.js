import React from 'react';
import Header from '../components/Header/Header'; // Assuming you have a Header component
import '../styles.css'; // Importing styles for your components
import ServerInfo from '../components/ServerInfo/ServerInfo';
import './ServerInfoPage.css'; // For Server Info Page component
const ServerInfoPage = () => {
  return (
    <div
      className="server-info-page"
      style={{
        backgroundImage: `url("/assets/server-background.png")`, // Use the relative path from `public`
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Keep the background fixed
        minHeight: '100vh', // Ensure the background covers the entire viewport height
        position: 'relative',
        overflowY: 'auto', // Enable scrolling for content
      }}
    >
      {/* Overlay to separate the background from content */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          minHeight: '100%', // Ensure overlay takes at least the full height of the viewport
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          zIndex: 1, // Ensure overlay stays on top of the background
          boxSizing: 'border-box', // Prevent the padding from affecting overall dimensions
        }}
      >
        {/* Header Component */}
        <Header />

        {/* Server Info Content */}
        <div className="server-info-container">
          <ServerInfo />
        </div>
      </div>
    </div>
  );
};


export default ServerInfoPage;

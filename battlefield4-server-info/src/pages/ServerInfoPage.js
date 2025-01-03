import React from 'react';
import backgroundImage from '../assets/server-background.png'; // Path to your background image
import Header from '../components/Header'; // Assuming you have a Header component
import '../assets/styles.css'; // Importing styles for your components
import ServerInfo from '../components/ServerInfo';

const ServerInfoPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'relative',
      }}
    >
      {/* Overlay to separate the background from content */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
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

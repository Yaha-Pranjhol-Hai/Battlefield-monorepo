import React from 'react';
import Header from '../components/Header/Header'; // Assuming you have a Header component
import '../styles.css'; // Importing styles for your components
import ServerInfo from '../components/ServerInfo/ServerInfo';
import './ServerInfoPage.css'; // For Server Info Page component


const ServerInfoPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/assets/server-background.png")`, // Use the relative path from `public`
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

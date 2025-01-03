import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const Header = () => {
  const [serverInfo, setServerInfo] = useState({
    gameMode: '',
    map: '',
    type: '',
    tickRate: ''
  });

  useEffect(() => {
    const fetchServerInfo = async () => {
      try {
        const response = await fetch('https://battlefield4-monorepo-backend.vercel.app/server-info', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        
        // Extract relevant data from the response
        setServerInfo({
          gameMode: data.serverDetails?.settings?.find(s => s.label === 'Mode')?.value || '',
          map: data.serverDetails?.settings?.find(s => s.label === 'Map')?.value || '',
          type: data.serverDetails?.advanced?.find(s => s.label === 'Region')?.value || '',
          tickRate: data.serverDetails?.tickRate || ''
        });
      } catch (error) {
        console.error('Error fetching server info:', error);
      }
    };

    fetchServerInfo();
  }, []);

  return (
    <div className="header">
      <div className="header-top">
        <button className="chevron-button">
          <IoIosArrowBack />
        </button>
        <h1 className="main-header">MULTIPLAYER / SERVER BROWSER /</h1>
      </div>
      <h2 className="server-info-title">
        SERVER INFO
      </h2>
      <p>
        <span className="flag-icon"></span>
        {`${serverInfo.gameMode} - ${serverInfo.map} - ${serverInfo.type} - ${serverInfo.tickRate} hz`}
      </p>
    </div>
  );
};

export default Header;
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
        const response = await fetch('http://localhost:3001/api/server-info');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setServerInfo(data);
      } catch (error) {
        console.error('Error fetching server info:', error);
      }
    };

    fetchServerInfo();
  }, []);

  return (
    <div className="header">
      {/* Chevron Button and Title in Same Line */}
      <div className="header-top">
        <button className="chevron-button">
          <IoIosArrowBack /> {/* Chevron icon */}
        </button>
        <h1 className="main-header">MULTIPLAYER / SERVER BROWSER /</h1>
      </div>

      {/* Server Info Title */}
      <h2 className="server-info-title">
        SERVER INFO
      </h2>

      {/* Server Details */}
      <p>
        <span className="flag-icon"></span>
        {`${serverInfo.gameMode} - ${serverInfo.map} - ${serverInfo.type} - ${serverInfo.tickRate} hz`}
      </p>
    </div>
  );
};

export default Header;
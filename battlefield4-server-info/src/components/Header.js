import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
export const API_URL = 'https://battlefield4-monorepo-backend.vercel.app';

const Header = () => {
  const [serverInfo, setServerInfo] = useState({
    gameMode: '',
    map: '',
    type: '',
    tickRate: ''
  });

  useEffect(() => {
    fetch(`${API_URL}/server-info`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => setServerInfo(data))
    .catch(error => console.error('Error:', error));
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
import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import axios from 'axios';
export const API_URL = process.env.REACT_APP_API_URL;

const Header = () => {
  const [serverInfo, setServerInfo] = useState({
    gameMode: '',
    map: '',
    type: '',
    tickRate: ''
  });

  useEffect(() => {
    axios
      .get(`${API_URL}/server-info`, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => setServerInfo(response.data))
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
      <h2 className="server-info-title">SERVER INFO</h2>
      <p>
        <span className="flag-icon"></span>
        {`${serverInfo.gameMode} - ${serverInfo.map} - ${serverInfo.type} - ${serverInfo.tickRate} hz`}
      </p>
    </div>
  );
};

export default Header;

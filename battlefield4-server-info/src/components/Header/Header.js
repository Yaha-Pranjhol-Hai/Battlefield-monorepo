import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import './Header.css';       // For Header component

const Header = () => {
  const serverInfo = {
    gameMode: 'Conquest Large',
    map: 'Siege of Shanghai',
    type: 'Normal',
    tickRate: '40 hz'
  };

  return (
    <div className="header">
      <div className="header-top">
        <button className="chevron-button">
          <IoIosArrowBack />
        </button>
        <h1 className="main-header">MULTIPLAYER / SERVER BROWSER /</h1>
      </div>
      <h2 className="server-info-title">SERVER INFO</h2>
    </div>
  );
};

export default Header;

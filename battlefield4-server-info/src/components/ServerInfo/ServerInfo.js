import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stats from '../Stats/Stats';
import Button from '../Button/Button';
import '../ServerInfo/ServerInfo.css';
import { FaStar } from 'react-icons/fa';
export const API_URL = process.env.REACT_APP_API_URL;

export default function ServerInfo() {
  const [serverData, setServerData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/server-info`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response.data); // Add this to check the actual response data
        setServerData(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('Failed to fetch server data');
      });
  }, []);

  if (error) return <div>{error}</div>;
  if (!serverData) return <div>Loading...</div>;

  return (
    <div className="server-info">
      <span className="server-info-title">{serverData.title}</span>
      <div className="server-info-flag-desc">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg"
          alt="German Flag"
          className="flag-icon"
        />
        <p className="server-info-content">
          Conquest Large - Siege of Shanghai - Normal - 40 Hz
        </p>
      </div>
      <p className="server-info-desc">{serverData.description}</p>
      <div className="buttons-container">
        <Button text="Join" />
        <Button text="Spectate" />
        <Button text="Join as Commander" />
        <Button>
          <FaStar className="star-icon" />
          <span className="star-button-text">  13672</span>
        </Button>
      </div>
      <Stats />
    </div>
  );
}

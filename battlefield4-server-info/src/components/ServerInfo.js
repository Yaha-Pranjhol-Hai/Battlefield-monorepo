import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stats from './Stats';
import Button from './Button';
export const API_URL = 'https://battlefield4-monorepo-backend.vercel.app';

export default function ServerInfo() {
  const [serverData, setServerData] = useState(null);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    axios.get(`${API_URL}/server-info`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true, // Include credentials for cookies
    })
    .then(response => setServerData(response.data))
    .catch(error => setError(error.message));
  }, []);
  

  if (error) return <div>{error}</div>;
  if (!serverData) return <div>Loading...</div>;

  return (
    <div className="server-info">
      <h1>{serverData.title}</h1>
      <p>{serverData.description}</p>
      <div className="buttons-container">
        <Button text="Join" />
        <Button text="Spectate" />
        <Button text="Join as Commander" />
      </div>
      <Stats />
    </div>
  );
}
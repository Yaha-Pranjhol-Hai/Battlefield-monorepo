import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import ServerDetails from './ServerDetails';
import Stats from './Stats';
import Button from './Button';
export default function ServerInfo  () {
  const [serverData, setServerData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/server-info')
      .then((response) => {
        setServerData(response.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

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
      
      {/* {serverData.serverDetails && (
        <ServerDetails data={serverData.serverDetails} />
      )} */}
      <Stats />
    </div>
  );
};

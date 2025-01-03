import React from 'react';

const ServerDetails = ({ data }) => {
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>Players: {data.players.current}/{data.players.max}</h2>
      <p><strong>Ping:</strong> {data.ping} ms</p>
      <p><strong>Tick Rate:</strong> {data.tickRate} Hz</p>

      {data.settings && data.settings.length > 0 && (
        <div>
          <h3>Settings</h3>
          <ul>
            {data.settings.map((setting, index) => (
              <li key={index}>
                <strong>{setting.label}:</strong> {setting.value}
              </li>
            ))}
          </ul>
        </div>
      )}

      {data.advanced && data.advanced.length > 0 && (
        <div>
          <h3>Advanced</h3>
          <ul>
            {data.advanced.map((adv, index) => (
              <li key={index}>
                <strong>{adv.label}:</strong> {adv.value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServerDetails;

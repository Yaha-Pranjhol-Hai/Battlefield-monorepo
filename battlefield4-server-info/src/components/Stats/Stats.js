import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../Button/Button'; // Assuming Button is in the Button folder
import './Stats.css';

export const API_URL = process.env.REACT_APP_API_URL;

const Stats = () => {
  const [serverData, setServerData] = useState(null);

  // Fetch data from backend server
  useEffect(() => {
    axios.get(`${API_URL}/server-info`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      setServerData(response.data);
    })
    .catch((error) => {
      console.error('Error fetching server data:', error);
    });
  }, []);

  // Handle loading and error states
  if (!serverData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="stats-container">
      {/* Stats Section */}
      <div className="stats">
        <div className="stat-item">
          <h3>PLAYERS</h3>
          <p>{serverData.serverDetails.players.current}/{serverData.serverDetails.players.max}</p>
        </div>
        <div className="stat-item">
          <h3>PING</h3>
          <p>{serverData.serverDetails.ping}ms</p>
        </div>
        <div className="stat-item">
          <h3>TICKRATE</h3>
          <p>{serverData.serverDetails.tickRate}Hz</p>
        </div>
      </div>

      {/* Settings, Advanced, Rules Section */}
      <div className="additional-details">
        <div className="settings-section">
          <h4>SETTINGS</h4>
          <table className="settings-table">
            <tbody>
              {serverData.settings.map((setting, index) => (
                <tr key={index}>
                  <td>{setting.label}</td>
                  <td>{setting.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="advanced-section">
          <h4>ADVANCED</h4>
          <table className="advanced-table">
            <tbody>
              {serverData.advanced.map((setting, index) => (
                <tr key={index}>
                  <td>{setting.label}</td>
                  <td>{setting.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rules-section">
          <h4>RULES</h4>
          <table className="rules-table">
            <tbody>
              {serverData.rules.map((rule, index) => (
                <tr key={index}>
                  <td>{rule.label}</td>
                  <td>{rule.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Stats;

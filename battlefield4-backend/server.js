const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/server-info', (req, res) => {
  const serverData = {
    title: 'NASA Multiplayer Server',
    description: 'An epic battle for survival',
    serverDetails: {
      players: { current: 32, max: 64 },
      ping: 47,
      tickRate: 60,
      settings: [
        { label: 'Map', value: 'Conquest' },
        { label: 'Mode', value: 'Large' }
      ],
      advanced: [
        { label: 'Region', value: 'USA' },
        { label: 'Version', value: '1.0.1' }
      ],
    },
    settings: [
      { label: 'Friendly Fire', value: 'Off' },
      { label: 'Voice Chat', value: 'On' }
    ],
    advanced: [
      { label: 'Server Location', value: 'New York' },
      { label: 'Max Players', value: '64' }
    ],
    rules: [
      { label: 'No Cheating', value: 'Enforced' },
      { label: 'Respect', value: 'Mandatory' }
    ]
  };
  res.json(serverData);
});

// **Export the app as a Vercel function:**
module.exports = (req, res) => {
  app(req, res); // This runs the express app for Vercel to handle
};

// Note: No need to call `app.listen()`, as Vercel handles the HTTP requests automatically.

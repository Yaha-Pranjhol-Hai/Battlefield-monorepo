const express = require('express');
const cors = require('cors');
const app = express();

const allowedOrigins = [
  'http://localhost:3000',
  'https://battlefield-monorepo-six.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true // Allows cookies to be sent
}));



// Move route to root level for Vercel
app.get('/server-info', (req, res) => {
  const serverData = {
    title: '#1| NASA | Noobs Welcome | Conquest 40Hz',
    description: 'Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord: https://discord.gg/3r5NK4d',
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

module.exports = app;

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
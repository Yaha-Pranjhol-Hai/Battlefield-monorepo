const express = require('express');
const cors = require('cors');
const app = express();

const allowedOrigins = [
  'http://localhost:3000',
  'https://battlefield-monorepo-oklwgpj73-pranjal-jain-projects-a2a166e4.vercel.app'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json()); // Handle JSON body parsing

app.get('/server-info', (req, res) => {
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

app.use((err, req, res, next) => {
  if (err.message === 'Not allowed by CORS') {
    res.status(403).json({ error: 'CORS error', message: err.message });
  } else {
    next(err);
  }
});

module.exports = app;

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
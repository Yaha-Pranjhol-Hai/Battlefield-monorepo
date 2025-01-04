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
      players: { current: 64, max: 64 },
      ping: 47,
      tickRate: 60,
    },
    settings: [
      { label: 'REGION', value: 'EUROPE - DE' },
      { label: 'PUNKBUSTER', value: 'ON' },
      { label: 'FAIRFIGHT', value: 'ON' },
      { label: 'PASSWORD', value: 'OFF' },
      { label: 'PRESET', value: 'NORMAL' },
    ],
    advanced: [
      { label: 'SERVER LOCATION', value: 'NEW YORK' },
      { label: 'MAX PLAYERS', value: '64' },
      { label: 'MINIMAP', value: 'ON' },
      { label: 'ONLY SQUAD LEADER SPAWN', value: 'OFF' },
      { label: 'VEHICLES', value: 'ON' },
      { label: 'TEAM BALANCE', value: 'ON' },
      { label: 'MINIMAP SPOTTING', value: 'ON' },
      { label: 'HUD', value: 'ON' },
      { label: '3P VEHICLE CAM', value: 'ON' },
      { label: 'REGENERATIVE HEALTH', value: 'ON' },
      { label: 'KILL CAM', value: 'ON' },
      { label: 'FRIENDLY FIRE', value: 'OFF' },
      { label: '3D SPOTTING', value: 'ON' },
      { label: 'ENEMY NAME TAGS', value: 'ON' }
    ],    
    rules: [
      { label: 'TICKETS', value: '400' },
      { label: 'VEHICLE SPAWN DELAY', value: '25' },
      { label: 'BULLET DAMAGE', value: '100' },
      { label: 'KICK AFTER TEAM KILLS', value: '5' },
      { label: 'PLAYER HEALTH', value: '100' },
      { label: 'PLAYER RESPAWN TIME', value: '100' },
      { label: 'KICK AFTER IDLE', value: '300' },
      { label: 'BAN AFTER KICKS', value: '3' }
    ]
    
  };
  res.json(serverData);
});

module.exports = app;

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

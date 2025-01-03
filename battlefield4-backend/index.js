const app = require('./app'); // Import your Express app

module.exports = (req, res) => {
  const handler = app(req, res);
  return handler;
};

const app = require('../server');

module.exports = (req, res) => {
  // Remove any trailing slash
  req.url = req.url.replace(/\/$/, '');
  
  // Handle the root path
  if (req.url === '') {
    req.url = '/';
  }

  return app(req, res);
};
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (_req, res) => {
  res.sendFile(__dirname + '/index.html');
  return res.status(200);
});

app.listen(port, () => {
  console.log('Server is running');
});

module.exports = app;

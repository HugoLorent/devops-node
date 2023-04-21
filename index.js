const express = require('express');

const app = express();
const port = 3000;

app.get('/', (_req, res) => {
  res.sendFile('./index.html');
});

app.listen(port, () => {
  console.log('Server is running');
});

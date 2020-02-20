const cors = require('cors')
const express = require('express');
const package = require('./package.json');
const app = express();

app.use(cors());

app.get('/healthz', (req, res) => {
  return res
    .json({
      success: true
    });
});

app.get('/', (req, res) => {
  return res.json({
    version: package.version
  })
});

app.listen('3000', () => {
  console.log('Listening on port 3000');
});

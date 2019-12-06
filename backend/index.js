const express = require('express');
const app = express();

app.get('/healtz', (req, res) => {
  return res
    .json({
      success: true
    })
    .status(200);
})

app.listen('8080', () => {
  console.log('Listening on port 8080');
})

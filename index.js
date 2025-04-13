const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Liveness endpoint
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

// Optional root endpoint
app.get('/', (req, res) => {
  res.send('Hello! This is a liveness check app.');
});

app.listen(port, () => {
  console.log(`Liveness app is listening on port ${port}`);
});

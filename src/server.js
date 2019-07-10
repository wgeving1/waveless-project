const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is up and running, listening on port ${PORT}`);
})

app.get('/', (req, res) => {
  res.send('Hello, World!');
})

app.post('/', (req, res) => {
  res.send('Got a POST request');
})
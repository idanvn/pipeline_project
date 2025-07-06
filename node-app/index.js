const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

if (!module.parent) {
  app.listen(3000, () => {
    console.log('Node.js app running on port 3000');
  });
}

module.exports = app;
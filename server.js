'use strict';

const express = require('express');

// Constants
const PORT = 1111;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Edvenswa from Ajith, how u doing?');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

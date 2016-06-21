'use strict';

const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

app.get('/icecream', (req, res) => {
  res.json({});
});

app.get('/milkshake', (req, res) => {
  res.json({});
});

express().use(express.static(__dirname + '/build'))
.listen(8080, () => console.log('listening on 8080'));

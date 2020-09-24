const express = require('express');
const app = express();
const port = 3003;
const {Product} = require('../Database/productsDB.js');
const {CartItem} = require('../Database/cartDB.js');

app.use(express.json());

app.use(express.static(__dirname + '/../Dist'))

app.get('/', (req, res) => {
  res.send('Hello from get');
})

app.post('/', (req, res) => {
  res.send('Hello from post');
})

app.listen(port, () => {
  `server is listening on: ${port}`
})
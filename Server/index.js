const express = require('express');
const app = express();
const port = 3000;
const {Item} = require('../Database/database.js')
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hello from get');
})

app.post('/', (req, res) => {
  res.send('Hello from post');
})

app.listen(port, () => {
  `server is listening on: ${port}`
})
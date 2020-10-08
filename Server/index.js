const express = require('express');
const app = express();
const port = 3003;
const cors = require('cors');

// db model
const {Product} = require('./Database/productsDB.js');
// middleware
app.use(express.json());
app.use(cors())
app.use(express.static(__dirname + '/../Dist/'))


// fetch all items in db
app.get('/products', (req, res) => {
  Product.find({}).then(result => res.send(result));
})


// fetch specific item by id
app.get('/products/:id', (req, res) => {
  var id = req.params.id;
  Product.findById(id).then(response => res.send(response));
})

app.get('/test', (req, res) => {
  res.send({"message": "pass!"})
})

app.listen(port, () => {
  `server is listening on: ${port}`
})
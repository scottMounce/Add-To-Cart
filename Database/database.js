const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cart');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('Database open for data!'));


const cart = mongoose.Schema({
  store: String,
  sales: Number,
  title: String,
  price: String,
  quantity: Number,
  size: String
})


const Item = mongoose.model('Item', cart);

module.exports.Item = Item;
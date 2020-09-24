const mongoose = require('mongoose');
const cartCon = mongoose.createConnection('mongodb://localhost/cart');


const cart = mongoose.Schema({
  title: String,
  price: Number,
  quantity: Number,
  size: String,
  image: String,
})

const CartItem = cartCon.model('CartItem', cart);

module.exports.CartItem = CartItem;
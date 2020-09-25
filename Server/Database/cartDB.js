const mongoose = require('mongoose');
const cartCon = mongoose.createConnection('mongodb://localhost/cart'); // to connect to multiple databases at once


const cart = mongoose.Schema({
  Id: { type : Number, unique : true, required : true},
  Title: String,
  Price: Number,
  Quantity: Number,
  Size: String,
  Image: String,
})

const CartItem = cartCon.model('CartItem', cart);

module.exports.CartItem = CartItem;
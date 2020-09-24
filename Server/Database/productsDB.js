const mongoose = require('mongoose');
const productCon = mongoose.createConnection('mongodb://localhost/product');


const products = mongoose.Schema({
  store: String,
  sales: Number,
  title: String,
  price: String,
  quantity: Number,
  size: String,
  image: String
})


const Product = productCon.model('Product', products);


module.exports.Product = Product;
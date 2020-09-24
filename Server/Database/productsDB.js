const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true); // to rid of deprication errors
mongoose.set('useNewUrlParser', true); // to rid of deprication error
const productCon = mongoose.createConnection('mongodb://localhost/product'); // to connect to multiple databases at once


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
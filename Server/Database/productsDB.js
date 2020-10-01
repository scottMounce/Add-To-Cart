const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true); // to rid of deprication errors
mongoose.set('useNewUrlParser', true); // to rid of deprication error
mongoose.connect('mongodb://localhost/product');


const products = mongoose.Schema({
  _id: Number,
  store: String,
  sales: Number,
  title: String,
  price: String,
  quantity: Number,
  size: String,
  image: String,
  storeReviews: Number,
}, { _id: false })


const Product = mongoose.model('Product', products);


module.exports.Product = Product;
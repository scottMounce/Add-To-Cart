const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true); // to rid of deprication errors
mongoose.set('useNewUrlParser', true); // to rid of deprication error
const productCon = mongoose.createConnection('mongodb://localhost/product'); // to connect to multiple databases at once


const products = mongoose.Schema({
  Id: { type : Number, unique : true, required : true},
  Store: String,
  Sales: Number,
  Title: String,
  Price: String,
  Quantity: Number,
  Size: String,
  Image: String
})


const Product = productCon.model('Product', products);


module.exports.Product = Product;
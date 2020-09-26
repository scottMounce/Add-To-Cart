const faker = require('faker');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/product');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);



const productList = mongoose.Schema({
  _Id: Number,
  Store: String,
  Sales: Number,
  Title: String,
  Price: String,
  Quantity: Number,
  Size: String,
  Image: String
})

const ProductItem = mongoose.model('ProductItem', productList);

var addInfo = () => {
  var count = 100;
  var sizes = ['xs', 's', 'm', 'l', 'xl'];
  while(count > 0) {
    var fakeData = {
      "Store": faker.name.findName(),
      "Sales": faker.random.number(),
      "Title": faker.name.findName(),
      "Price": faker.commerce.price(),
      "Quantity": faker.random.number(),
      "Size": sizes[Math.floor(Math.random() * 4)],
      "Image": faker.image.imageUrl()
    }
    count--;
    var fakeProduct = new ProductItem(fakeData);
    fakeProduct.save();
  }
}

addInfo()




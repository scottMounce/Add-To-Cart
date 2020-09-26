const faker = require('faker');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/product');




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
  var id = 0;
  var count = 100;
  var sizes = ['xs', 's', 'm', 'l', 'xl'];
  while(count > 0) {
    var fakeData = {
      "_Id": id,
      "Store": faker.name.findName(),
      "Sales": faker.random.number(),
      "Title": faker.name.findName(),
      "Price": faker.commerce.price(),
      "Quantity": faker.random.number(),
      "Size": sizes[Math.floor(Math.random() * 5)],
      "Image": faker.image.imageUrl()
    }
    id++;
    count--;
    var fakeProduct = new ProductItem(fakeData);
    fakeProduct.save();
  }
}

addInfo();




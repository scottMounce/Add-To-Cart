const faker = require('faker');
const mongoose = require('mongoose');
const {Product} = require('./productsDB.js');


var addInfo = () => {
  var id = 0;
  var count = 100;
  var sizes = ['XS', 'S', 'M', 'L', 'XL'];
  while(count > 0) {
    var fakeData = {
      "_id": id,
      "store": faker.name.findName(),
      "sales": faker.random.number(),
      "title": faker.name.findName(),
      "price": faker.commerce.price(),
      "quantity": faker.random.number(),
      "size": sizes[Math.floor(Math.random() * 5)],
      "image": faker.image.imageUrl()
    }
    id++;
    count--;
    var fakeProduct = new Product(fakeData);
    fakeProduct.save();
  }
}

addInfo();




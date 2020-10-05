const faker = require('faker');
const mongoose = require('mongoose');
const {Product} = require('./productsDB.js');


var addInfo = () => {
  var id = 0;
  var count = 91;
  var sizes = ['XS', 'S', 'M', 'L', 'XL'];


// first obj in database for display purposes
  var firstItem = () => {
    var firstItem = {
      "_id": id,
      "store": "Ticketybootique",
      "sales": 1469,
      "title": "Pumpkin pie cat and small pet hat felt costume",
      "price": "20.00",
      "quantity": Math.floor(Math.random() * 15),
      "size": sizes[Math.floor(Math.random() * 5)],
      "image": "https://addtocart123.s3.us-east-2.amazonaws.com/FEC/1.jpg",
      "storeReviews": Math.floor(Math.random() * 6)
    }
    id++
    var firstProduct = new Product(firstItem);
    firstProduct.save();
  }

  firstItem();

// two - nine for the modal
  while( id < 10) {
     var twoToNineItems = {
      "_id": id,
      "store": faker.name.findName(),
      "sales": faker.random.number(),
      "title": faker.name.findName(),
      "price": faker.commerce.price(),
      "quantity": Math.floor(Math.random() * 15),
      "size": sizes[Math.floor(Math.random() * 5)],
      "image": `https://addtocart123.s3.us-east-2.amazonaws.com/FEC/${id}.jpg`,
      "storeReviews": Math.floor(Math.random() * 6)
    }
    id++
    var twoToNineProducts = new Product(twoToNineItems)
    twoToNineProducts.save()
  }

// rest of the mock data
  while(count > 0) {
    var fakeData = {
      "_id": id,
      "store": faker.name.findName(),
      "sales": faker.random.number(),
      "title": faker.name.findName(),
      "price": faker.commerce.price(),
      "quantity": Math.floor(Math.random() * 15),
      "size": sizes[Math.floor(Math.random() * 5)],
      "image": faker.image.imageUrl(),
      "storeReviews": Math.floor(Math.random() * 6)
    }
    id++;
    count--;
    var fakeProduct = new Product(fakeData);
    fakeProduct.save();
  }
}

addInfo();




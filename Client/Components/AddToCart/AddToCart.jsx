import React from 'react';
import './AddToCart.css';
import ProductInfo from './subComponents/productInfo/productInfo.jsx';


class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: "Ticketybootique",
      sales: "1,386",
      title: "Pumpkin pie cat and small pet hat felt costume",
      price: "20.00",
      quantity: [1,2,3],
      sizes: [],
      keyCounter: -1,
    };
  }

  //// UTILITIES

  //creates keys
  keyGenerator() {
    this.state.keyCounter++;
    return this.state.keyCounter;
  }

  // turns quantity from a number to an array
  quantityGenerator(number) {
    var newQuantity = []
    if(number < 10){
      for(let i = 0; i < number; i++){
        newQuantity.push(i);
      }
    } else {
      newQuantity = [1,2,3,4,5,6,7,8,9,10];
    }
   return newQuantity;
  }

  // onClick changes the price depending on the size

  sizeSwitcher(e) {
    fetch('http://localhost:3003/products/')
    .then(response => response.json())
    .then(result => result.map(item => {
      if(this.state.title === item.title && item.size === e.target.value.substring(0,1)){
        this.setState({
          price: item.price
        })
      }
    }))
  }




  componentDidMount(){
    // updates the state depending on the specific id passed
    fetch('http://localhost:3003/products/10')
    .then(response => response.json())
    .then(result => this.setState({
      store: result.store,
      sales: result.sales,
      title: result.title,
      price: result.price,
      quantity: this.quantityGenerator(result.quantity)
    }))
    .catch(err => console.error(err))
    .then(() =>
    //checks if there is any other sizes by comparing titles
      fetch('http://localhost:3003/products/')
      .then(response => response.json())
      .then(result => result.map(product => {
        if(product.title === this.state.title) {
        var newSizes = [];
        newSizes.push(product.size);
        this.setState({
          sizes: newSizes
          })
        }}
      ))
    )
    .catch(err => console.error(err))
  }



  render() {
    return (
      <div className="container">

        <ProductInfo
        store={this.state.sales}
        sales={this.state.sales}
        title={this.state.title}
        price={this.state.price}
        />


        {/* create a select component named select*/}
        <label>
          Size
          <br />
          <select>
            <option>Select Size</option>
            {this.state.sizes.map(size => <option onClick={this.sizeSwitcher.bind(this)} key={this.keyGenerator()}>{size}</option>)}
          </select>
        </label>
        <label>
          Quantity
          <br />
          <select>
            {this.state.quantity.map(number => <option key={this.keyGenerator()}>{number}</option>)}
          </select>
        </label>



        <button className="addButton">Add to cart</button>

        {/* move to the promo component and the css aswell */}
        <div className="promos">
          <img src="https://www.flaticon.com/svg/static/icons/svg/711/711192.svg" />
          <p>
            <strong>Other people want this.</strong> Over 20 people have this in
            their carts right now.
          </p>
        </div>
        <div className="promos">
          <img src="https://www.flaticon.com/svg/static/icons/svg/565/565391.svg" />
          <p>
            <strong>Nice choice!</strong> Enjoy free shipping to the US when you
            spend $35+ at this shop.
          </p>
        </div>


      </div>
    );
  }
}

export default AddToCart;
import React from 'react';
import './AddToCart.css';


class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: "Ticketybootique",
      sales: "1,386",
      title: "Pumpkin pie cat and small pet hat felt costume",
      price: "20.00",
      quantity: 10,
      sizes: [],
      keyCounter: -1,
    };
  }



  //// UTILITIES
  keyGenerator(){
    this.state.keyCounter++;
    return this.state.keyCounter;
  }

  componentDidMount(){
    fetch('http://localhost:3003/products/50')
    .then(response => response.json())
    .then(result => this.setState({
      store: result.store,
      sales: result.sales,
      title: result.title,
      price: result.price,
      quantity: new Array(result.quantity)
    }))
    .catch(err => console.error(err))
    .then(() =>
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

        <h4>{this.state.store}</h4>
        <p className="storeTotals">
          {this.state.sales} sales <span className="divider">|</span> *****
        </p>
        <h6>{this.state.title}</h6>
        <p className="price">
          ${this.state.price}<span>In stock</span>
        </p>



        <label>
          Size
          <br />
          <select>
          {this.state.sizes.map(size => <option key={this.keyGenerator()}>{size}</option>)}
          </select>
        </label>
        <label>
          Quantity
          <br />
          <select>
           <option>1</option>
           <option>2</option>
           <option>3</option>
           <option>4</option>
          </select>
        </label>



        <button className="addButton">Add to cart</button>


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
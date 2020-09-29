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
    };
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
            <option>S</option>
            <option>M</option>
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
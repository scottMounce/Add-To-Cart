import React from 'react';
import './AddToCart.css';
import ProductInfo from './subComponents/productInfo/productInfo.jsx';
import Select from './subComponents/select/select.jsx';
import Promo from './subComponents/promo/promo.jsx';
import PromoContainer from './subComponents/promoContainer/PromoContainer.jsx';
import PromoModal from './subComponents/promoModal/modal.jsx';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectSize: true,
      store: "",
      sales: "",
      title: "",
      price: "",
      quantity: [1,2,3],
      sizes: [],
      promoVisible: true,
      storeReviews: 0,
      image: "",
      firstRowModalItems: [{title: "fake", image: "fake", price: "fake"}],
      secondRowModalItems: [],
      keyCounter: -1,
    };
  }

  //// UTILITIES

  // changes the state of selectSize to display price
  selectSize(e) {
    this.setState({
      selectSize: false
    })
  }


  // creates a new key for the components
  keyGenerator() {
    this.state.keyCounter++
    return this.state.keyCounter;
  }

  // onClick change visible state of the promo container
  changeVisible(e) {
    this.setState({
      promoVisible: false
    })
  }


  // adds commas to a number
  numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  // turns quantity from a number to an array
  quantityGenerator(number) {
    var newQuantity = []
    if(number < 10){
      for(let i = 1; i <= number; i++){
        newQuantity.push(i);
      }
    } else {
      newQuantity = [1,2,3,4,5,6,7,8,9,10];
    }
   return newQuantity;
  }

  // onClick changes the price depending on the size


  // will be needed in a real situation probably can be refactored though
  // sizeSwitcher(e) {
  //   fetch('http://localhost:3003/products/')
  //   .then(response => response.json())
  //   .then(result => result.map(item => {
  //     if(this.state.title === item.title && item.size === e.target.value.substring(0,1)){
  //       this.setState({
  //         price: item.price
  //       })
  //     }
  //   }))
  // }

  componentDidMount(){
    var url = window.location.pathname;
    if(url.length < 2) {
      url = "/1"
    }
    var id = url.substring(url.lastIndexOf('/') + 1);
    // updates the state depending on the specific id passed
    fetch(`http://localhost:3003/products/${id}`)
    .then(response => response.json())
    .then(result => this.setState({
      store: result.store,
      sales: this.numberWithCommas(result.sales),
      title: result.title,
      price: result.price,
      image: result.image,
      quantity: this.quantityGenerator(result.quantity),
      storeReviews: result.storeReviews,
    }))
    .catch(err => console.error(err))
    .then(() =>
    //checks if there is any other sizes by comparing titles
      fetch('http://localhost:3003/products/')
      .then(response => response.json())
      .then(result => {
        var firstRowModalProducts = [];
        var secondRowModalProducts = [];
        result.map(product => {
        if(product.title === this.state.title) {
        var newSizes = [];
        newSizes.push(product.size);
        this.setState({
          sizes: newSizes
          })
        }
          // fills up the first row in the modal
        if(product._id < 6 && product._id != 1) {
          firstRowModalProducts.push(product);

          // fills up the second row in the modal
        } else if(product._id < 10 && product._id != 1) {
          secondRowModalProducts.push(product);
        }
        // sets the state for the modal first row
        if(firstRowModalProducts.length === 4) {
          this.setState({
            firstRowModalItems: firstRowModalProducts
          })
        }
        // sets the state for the modal second row
        if(secondRowModalProducts.length === 4) {
          this.setState({
            secondRowModalItems: secondRowModalProducts
          })
        }
      })
    })
  )
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="container">

        <ProductInfo
        storeReviews={this.state.storeReviews}
        store={this.state.store}
        sales={this.state.sales}
        title={this.state.title}
        price={this.state.price}
        quantity={this.state.quantity}
        selectSize={this.state.selectSize}
        />

        <Select
        selectSize={this.selectSize.bind(this)}
        keyGenerator={this.keyGenerator.bind(this)}
        sizes={this.state.sizes}
        quantity={this.state.quantity}
        />


        <PromoModal
        keyGenerator={this.keyGenerator.bind(this)}
        firstRowModalItems={this.state.firstRowModalItems}
        secondRowModalItems={this.state.secondRowModalItems}
        image={this.state.image}
        price={this.state.price}
        title={this.state.title}
        changeVisible={this.changeVisible.bind(this)}
        />

        <Promo />

        {this.state.promoVisible? <PromoContainer
        firstProduct={{
          title: this.state.title,
          image: this.state.image,
          price: this.state.price
        }}
        secondProduct={{
          title: this.state.firstRowModalItems[0].title,
          image: this.state.firstRowModalItems[0].image,
          price: this.state.firstRowModalItems[0].price
        }} /> : '' }

      </div>
    );
  }
}

export default AddToCart;
import React from 'react';
import './PromoContainer.css';


const PromoContainer = (props) => {
  return (
    <div className="promoContainer">

      <div className="promoTitle">
        <h4>Buy Together, get free shipping</h4>
      </div>

      <div className="itemInfoContainer">
        <img src="https://i.etsystatic.com/8780787/c/2227/1768/0/252/il/0ba95f/1338510568/il_680x540.1338510568_cjpq.jpg" />
        <div>
          <h4 className="top-space">Pumpkin pie cat and small pet hat felt cost...</h4>
          <h4 className="money">$20.00</h4>
        </div>
      </div>


      <div className="itemInfoContainer">
        <img src="https://i.etsystatic.com/8780787/d/il/9e2a59/1419322823/il_680x540.1419322823_m9gb.jpg?version=0" />
        <div>
          <h4 className="top-space">Christmas tree pet costume</h4>
          <h4 className="money">$20.00</h4>
        </div>
      </div>


      <button>Add both to cart</button>

      <span>See more items  -></span>
    </div>
  )
}

export default PromoContainer;
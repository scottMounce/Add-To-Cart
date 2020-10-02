import React from 'react';
import './promo.css';

var Promo = (props) => {
  return(
    <div>
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
  )
}

export default Promo;

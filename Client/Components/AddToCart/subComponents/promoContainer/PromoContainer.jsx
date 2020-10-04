import React from 'react';
import './PromoContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const PromoContainer = ({image, title, price}) => {
  return (
    <div className="promoContainer">

      <div className="promoTitle">
        <h4>Buy together, get free shipping</h4>
      </div>

      <div className="itemInfoContainer">
        <img src={image} />
        <div>
          <h4 className="top-space">{title}</h4>
          <h4 className="money">${price}</h4>
        </div>
      </div>


      <div className="itemInfoContainer">
        <img src={image} />
        <div>
          <h4 className="top-space">{title}</h4>
          <h4 className="money">${price}</h4>
        </div>
      </div>


      <button>Add both to cart</button>

      <span>See more items<FontAwesomeIcon className="rightArrow" icon={faArrowRight} /></span>
    </div>
  )
}

export default PromoContainer;
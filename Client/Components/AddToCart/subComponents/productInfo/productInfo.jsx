import React from 'react';
import './productInfo.css';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as fiStar} from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


var ProductInfo = ({selectSize, quantity, storeReviews, store, sales, title, price}) => {
  var icon = '';
  if(quantity.length > 0) {
  var icon = <FontAwesomeIcon icon={faCheck} />
  var inStock = 'In stock';
  } else {
    var inStock = 'Out of stock!'
  }
  return (
    <div>
      <h4>{store}</h4>
      <p className="storeTotals">
        {sales} sales <span className="divider">|</span>
        <Rating
          initialRating={storeReviews}
          emptySymbol = {<FontAwesomeIcon icon={fiStar} />}
          fullSymbol = {<FontAwesomeIcon icon={faStar} />}
          readonly
        />
      </p>
      <h6>{title}</h6>
      <p className="price">
        {!selectSize ? `$${price}` : "$__.__"}<span>{icon} {inStock}</span>
      </p>
    </div>
  )
}


export default ProductInfo;
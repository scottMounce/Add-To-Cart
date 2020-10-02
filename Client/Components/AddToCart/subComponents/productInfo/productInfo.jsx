import React from 'react';
import './productInfo.css';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as fiStar} from '@fortawesome/free-regular-svg-icons'



var ProductInfo = ({storeReviews, store, sales, title, price}) => {
  console.log(storeReviews);
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
        ${price}<span>In stock</span>
      </p>
    </div>
  )
}


export default ProductInfo;
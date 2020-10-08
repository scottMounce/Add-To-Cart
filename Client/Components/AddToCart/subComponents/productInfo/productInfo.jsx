import React from 'react';
import styles from './productInfo.module.css';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as fiStar} from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


var ProductInfo = ({quantity, storeReviews, store, sales, title, price}) => {
  var icon = '';
  if(quantity.length > 0) {
  var icon = <FontAwesomeIcon icon={faCheck} />
  var inStock = 'In stock';
  } else {
    var inStock = 'Out of stock!'
  }
  return (
    <div>
      <h4 className={styles.storeName}>{store}</h4>
      <p className={`${styles.storeTotals} ${styles.underline}`}>
        {sales} sales <span className={styles.divider}>|</span>
        <Rating
          initialRating={storeReviews}
          emptySymbol = {<FontAwesomeIcon icon={fiStar} />}
          fullSymbol = {<FontAwesomeIcon icon={faStar} />}
          readonly
        />
      </p>
      <h6 className={styles.title}>{title}</h6>
      <p className={styles.price}>
        ${price}<span className={styles.span}>{icon} {inStock}</span>
      </p>
    </div>
  )
}


export default ProductInfo;
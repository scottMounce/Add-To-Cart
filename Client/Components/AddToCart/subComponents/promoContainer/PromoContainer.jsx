import React from 'react';
import styles from './PromoContainer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const PromoContainer = ({firstProduct, secondProduct}) => {
  return (
    <div>

      <div>
        <h4 className={styles.text}>Buy together, get free shipping</h4>
      </div>

      <div className={styles.itemInfoContainer}>
        <img className={styles.image} src={firstProduct.image} />
        <div className={styles.itemInfoContainerDiv}>
          <h4 className={styles.productTitle}>{firstProduct.title.substring(0,7)}</h4>
          <h4 className={styles.money}>${firstProduct.price}</h4>
        </div>
      </div>


      <div className={styles.itemInfoContainer}>
        <img className={styles.image} src={secondProduct.image} />
        <div className={styles.itemInfoContainerDiv}>
          <h4 className={styles.productTitle}>{secondProduct.title}</h4>
          <h4 className={styles.money}>${secondProduct.price}</h4>
        </div>
      </div>


      <button className={styles.button}>Add both to cart</button>

      <span className={styles.span}>See more items<FontAwesomeIcon className={styles.rightArrow} icon={faArrowRight} /></span>
    </div>
  )
}

export default PromoContainer;
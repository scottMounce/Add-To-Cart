import React from 'react';
import styles from './card.module.css';


const Card = ({image, title, price}) => {
  if(title.length > 7) {
    title = title.substring(0,7)
  }
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} />
      <h6 className={styles.priceAndTitle}>{title}</h6>
      <h6 className={styles.priceAndTitle}>${price}</h6>
    </div>
  )
}


export default Card;
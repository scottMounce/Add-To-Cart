import React from 'react';
import styles from './mainCard.module.css';


const MainCard = ({closeModal, title, price, image}) => {
  return (
    <div className={styles.mainCardContainer}>
      <div className={styles.mainCard}>
        <img className={styles.image} src={image} />
        <div className={styles.mainInfo}>
          <h4 className={styles.priceAndTitle}>{title}</h4>
          <h4 className={styles.priceAndTitle}>${price}</h4>
          <button className={styles.button}>Go to cart</button>
        </div>
      </div>
      <div className={styles.loading}><span className={styles.innerLoading}></span></div>
      <h2 className={styles.modalDeal}>You are always $1.00 away from getting free shipping from this store</h2>
      <button onClick={() => closeModal()} className={styles.closeModal}>X</button>
    </div>
  )
}

export default MainCard;
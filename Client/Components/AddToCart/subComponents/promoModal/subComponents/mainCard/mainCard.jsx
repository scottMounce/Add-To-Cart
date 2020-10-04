import React from 'react';
import './mainCard.css';


const MainCard = ({closeModal, title, price, image}) => {
  return (
    <div className="mainCardContainer">
      <div className="mainCard">
        <img src={image} />
        <div className="mainInfo">
          <h4>{title}</h4>
          <h4>${price}</h4>
          <button>Go to cart</button>
        </div>
      </div>
      <div className="loading"><span className="innerLoading"></span></div>
      <h2 className="modalDeal">You are always $1.00 away from getting free shipping from this store</h2>
      <button onClick={() => closeModal()} className="closeModal">X</button>
    </div>
  )
}

export default MainCard;
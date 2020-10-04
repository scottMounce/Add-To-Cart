import React from 'react';
import Modal from 'react-modal';
import './modal.css';
import MainCard from './subComponents/mainCard/mainCard.jsx';
import Card from './subComponents/card/card.jsx';

class PromoModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
    }
  }

  openModal(e) {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal(e) {
    this.setState({
      modalIsOpen: false
    });
  }

  render(){
    return (
      <div>
      <button
        onClick={() => {
          this.props.changeVisible()
          this.openModal()
          }
        }
        className="addButton"
      >
        Add to cart
      </button>
      <Modal
        ariaHideApp={false}
        isOpen={this.state.modalIsOpen}
        className="Modal"
        contentLabel="Example Modal"
        overlayClassName="Overlay"
      >
        <div>
          <h2 className="confirmation">Added to cart</h2>
          <MainCard  image={this.props.image} title={this.props.title} price={this.props.price} />
          <div className="cards">
            <Card image={this.props.image} title={this.props.title} price={this.props.price}   />
            <Card image={this.props.image} title={this.props.title} price={this.props.price}   />
            <Card image={this.props.image} title={this.props.title} price={this.props.price}   />
            <Card image={this.props.image} title={this.props.title} price={this.props.price}   />
          </div>
          <div className="cards">
            <Card image={this.props.image} title={this.props.title} price={this.props.price}   />
            <Card image={this.props.image} title={this.props.title} price={this.props.price}   />
            <Card image={this.props.image} title={this.props.title} price={this.props.price}   />
            <Card image={this.props.image} title={this.props.title} price={this.props.price}   />
          </div>
        </div>
        <button onClick={this.closeModal.bind(this)}>close</button>
      </Modal>
    </div>
    )
  }
}

export default PromoModal;
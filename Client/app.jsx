
class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {
        store: 'Ticketybootique',
        sales: '1,386',
        title: 'Pumpkin pie cat and small pet hat felt costume',
        price: '20.00',
    }
  }

  render(){
    return (
      <div className="container">
        <p className="storeName">{this.state.store}</p>
        <p className="sales">{this.state.sales} sales   <span className='salesDivider'>|</span> *****</p>
        <h6 className="title">{this.state.title}</h6>
        <p className="price">${this.state.price} <span className="stock">In stock</span></p>
        <label className="selectTitle">Size
        <br/>
        <select className="select">
          <option>S</option>
          <option>M</option>
        </select>
        </label>
        <br/>
        <label className="selectTitle">Quantity
        <br/>
        <select className="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        </label>
        <button className="button">Add to cart</button>
        <div className="iconContainer">
        <img className="icon"src="https://www.flaticon.com/svg/static/icons/svg/711/711192.svg"/><p className="info"><strong>Other people want this.</strong> Over 20 people have this in their carts right now.</p>
        </div>
        <div className="iconContainer">
        <img className="icon"src="https://www.flaticon.com/svg/static/icons/svg/565/565391.svg"/><p className="info"><strong>Nice choice!</strong> Enjoy free shipping to the US when you spend $35+ at this shop.</p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
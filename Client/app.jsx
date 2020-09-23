
class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {
        store: 'Ticketybootique',
        sales: 1384,
        title: 'Pumpkin pie cat and small pet hat felt costume',
        price: 20.00,

    }
  }

  render(){
    return (
      <div>
        <p className="storeName">{this.state.store}</p>
        <p>{this.state.sales} sales | *****</p>
        <h6>{this.state.title}</h6>
        <span>${this.state.price}</span> <span>In stock</span>
        <br/>
        Size
        <br/>
        <select>
          <option>S</option>
          <option>M</option>
        </select>
        <br/>
        Quantity
        <br/>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <br/>
        <button>Add to cart</button>
        <br/>
        <br/>
        <span>Other people want this. Over 20 people have this in their carts right now.</span>
        <br/>
        <br/>
        <span>Nice choice! Enjoy free shipping to the US when you spend $35+ at this shop.</span>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
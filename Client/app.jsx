import React from "react";
import ReactDOM from "react-dom";
import AddToCart from "./Components/AddToCart/AddToCart.jsx";

const App = () => {

  return (
    <div>
      <AddToCart />
    </div>
  );
};



ReactDOM.render(<App />, document.getElementById("root"));

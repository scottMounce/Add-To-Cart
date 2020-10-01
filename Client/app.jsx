import React from "react";
import ReactDOM from "react-dom";
import AddToCart from "./Components/AddToCart/AddToCart.jsx";
import PromoContainer from "./Components/PromoContainer/PromoContainer.jsx";

const App = () => {
  return (
    <div>
      <AddToCart />
      <PromoContainer />
    </div>
  );
};



ReactDOM.render(<App />, document.getElementById("root"));
